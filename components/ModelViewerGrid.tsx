"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const MODELS = [
  { src: "/library_designs/v0/BaseModel_Avancar.glb", label: "Base" },
  { src: "/library_designs/v0/Model1_Avancar.glb", label: "Model 1" },
  { src: "/library_designs/v0/Model2_Avancar.glb", label: "Model 2" },
  { src: "/library_designs/v0/Model3_Avancar.glb", label: "Model 3" },
];

const MOBILE_BREAKPOINT = 768;
const VIEWPORT_HEIGHT = 320;

export default function ModelViewerGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [interactiveIndex, setInteractiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const getWidth = () => container.clientWidth || 400;
    const width = getWidth();
    const mobile = window.innerWidth < MOBILE_BREAKPOINT;
    const cols = mobile ? 1 : 4;
    const rows = mobile ? 4 : 1;
    const totalHeight = mobile ? VIEWPORT_HEIGHT * 4 : VIEWPORT_HEIGHT;
    const viewportWidth = Math.max(width / cols, 1);
    const viewportHeight = Math.max(totalHeight / rows, 1);
    const dpr = Math.min(window.devicePixelRatio ?? 1, 2);

    const scenes: THREE.Scene[] = [];
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, totalHeight);
    renderer.setClearColor(0x1a3d1a, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const getViewportIndex = (clientX: number, clientY: number): number | null => {
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const { cols, rows, vpw, vph } = layoutRef;
      if (x < 0 || x >= cols * vpw || y < 0 || y >= rows * vph) return null;
      const col = Math.floor(x / vpw);
      const rowFromTop = Math.floor(y / vph);
      const row = rows - 1 - rowFromTop;
      const i = col + row * cols;
      return i < MODELS.length ? i : null;
    };

    const activateViewport = (index: number) => {
      orbitControlsList.forEach((ctl, i) => {
        if (ctl) ctl.enabled = i === index;
      });
      activeIndex = index;
      setInteractiveIndex(index);
    };

    const deactivateViewport = () => {
      orbitControlsList.forEach((ctl) => {
        if (ctl) ctl.enabled = false;
      });
      activeIndex = null;
      setInteractiveIndex(null);
    };

    const onPointerDown = (e: MouseEvent) => {
      const i = getViewportIndex(e.clientX, e.clientY);
      if (i !== null && orbitControlsList[i]) activateViewport(i);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") deactivateViewport();
    };

    container.addEventListener("pointerdown", onPointerDown, true);
    window.addEventListener("keydown", onKeyDown);

    const layoutRef = { cols: mobile ? 1 : 4, rows: mobile ? 4 : 1, vpw: viewportWidth, vph: viewportHeight, totalH: totalHeight };
    let activeIndex: number | null = null;
    const orbitControlsList: (InstanceType<typeof OrbitControls> | null)[] = [null, null, null, null];

    const loader = new GLTFLoader();
    const cameras: THREE.PerspectiveCamera[] = [];
    const spheres: { radius: number }[] = [];
    const box = new THREE.Box3();
    const center = new THREE.Vector3();
    const size = new THREE.Vector3();

    let loaded = 0;
    const target = MODELS.length;

    const loadNext = (index: number) => {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x1a3d1a);
      scenes[index] = scene;

      loader.load(
        MODELS[index].src,
        (gltf) => {
          const model = gltf.scene;
          const mat = new THREE.MeshStandardMaterial({
            color: 0xe8e8e8,
            roughness: 0.4,
            metalness: 0.1,
            envMapIntensity: 1,
          });
          model.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              (mesh.material as THREE.Material)?.dispose?.();
              mesh.material = mat;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
            }
          });
          box.setFromObject(model);
          box.getCenter(center);
          box.getSize(size);
          const maxDim = Math.max(size.x, size.y, size.z);
          const radius = Math.max(maxDim * 1.35, 1);
          model.position.sub(center);
          scene.add(model);

          const ambient = new THREE.AmbientLight(0x404050, 0.5);
          scene.add(ambient);
          const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
          keyLight.position.set(-radius * 1.5, radius * 1.2, radius * 1.5);
          keyLight.castShadow = true;
          keyLight.shadow.mapSize.width = 256;
          keyLight.shadow.mapSize.height = 256;
          keyLight.shadow.camera.near = 0.1;
          keyLight.shadow.camera.far = radius * 6;
          keyLight.shadow.camera.left = -radius * 2;
          keyLight.shadow.camera.right = radius * 2;
          keyLight.shadow.camera.top = radius * 2;
          keyLight.shadow.camera.bottom = -radius * 2;
          keyLight.shadow.camera.updateProjectionMatrix();
          keyLight.target.position.set(0, 0, 0);
          scene.add(keyLight);
          const fillLight = new THREE.DirectionalLight(0x8899aa, 0.3);
          fillLight.position.set(radius, radius * 0.5, -radius);
          scene.add(fillLight);
          const groundGeo = new THREE.PlaneGeometry(radius * 4, radius * 4);
          const groundMat = new THREE.MeshStandardMaterial({
            color: 0x0f2a0f,
            roughness: 1,
            metalness: 0,
          });
          const ground = new THREE.Mesh(groundGeo, groundMat);
          ground.rotation.x = -Math.PI / 2;
          ground.position.y = -size.y / 2 - 0.01;
          ground.receiveShadow = true;
          scene.add(ground);
          spheres[index] = { radius };
          const cam = new THREE.PerspectiveCamera(
            35,
            viewportWidth / viewportHeight,
            0.1,
            radius * 10
          );
          cameras[index] = cam;
          const controls = new OrbitControls(cam, renderer.domElement);
          controls.enabled = false;
          controls.target.set(0, 0, 0);
          controls.enableDamping = true;
          controls.dampingFactor = 0.08;
          controls.minDistance = radius * 0.4;
          controls.maxDistance = radius * 2.5;
          controls.minPolarAngle = 0.05;
          controls.maxPolarAngle = Math.PI - 0.05;
          orbitControlsList[index] = controls;
          loaded++;
        },
        undefined,
        () => {
          loaded++;
        }
      );
    };

    for (let i = 0; i < target; i++) loadNext(i);

    let rafId: number;
    const startTime = Date.now();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = (Date.now() - startTime) * 0.001;
      const { cols, rows, vpw, vph, totalH } = layoutRef;

      if (loaded < target) {
        renderer.clear();
        return;
      }

      const activeCtl = activeIndex !== null ? orbitControlsList[activeIndex] : null;
      if (activeCtl) activeCtl.update();

      for (let i = 0; i < target; i++) {
        if (activeIndex === i) continue;
        const cam = cameras[i];
        const sp = spheres[i];
        const scene = scenes[i];
        if (!cam || !sp || !scene) continue;

        const offset = i * 1.1;
        const dist = 0.78 + 0.52 * Math.sin(t * 0.4 + offset);
        const phi = 0.12 + 0.65 * Math.sin(t * 0.35 + offset * 0.7);
        const theta = t * 0.55 + offset * 0.8;
        const r = sp.radius * dist;
        const x = r * Math.sin(phi) * Math.cos(theta);
        const z = r * Math.sin(phi) * Math.sin(theta);
        const y = r * Math.cos(phi);
        cam.position.set(x, y, z);
        cam.lookAt(0, 0, 0);
        cam.updateMatrixWorld(true);
      }

      renderer.setScissorTest(true);
      renderer.setClearColor(0x1a3d1a, 1);
      renderer.clear();

      for (let i = 0; i < target; i++) {
        const x = (i % cols) * vpw;
        const y = Math.floor(i / cols) * vph;
        renderer.setViewport(x, y, vpw, vph);
        renderer.setScissor(x, y, vpw, vph);
        if (cameras[i] && scenes[i]) {
          renderer.render(scenes[i], cameras[i]);
        }
      }
      renderer.setScissorTest(false);
    };

    animate();

    const onResize = () => {
      const w = Math.max(container.clientWidth, 1);
      const mobile = w < MOBILE_BREAKPOINT;
      const cols = mobile ? 1 : 4;
      const rows = mobile ? 4 : 1;
      const totalH = mobile ? VIEWPORT_HEIGHT * 4 : VIEWPORT_HEIGHT;
      const vpw = w / cols;
      const vph = totalH / rows;
      layoutRef.cols = cols;
      layoutRef.rows = rows;
      layoutRef.vpw = vpw;
      layoutRef.vph = vph;
      layoutRef.totalH = totalH;
      renderer.setSize(w, totalH);
      cameras.forEach((cam) => {
        if (cam) cam.aspect = vpw / vph;
      });
    };
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    return () => {
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
      orbitControlsList.forEach((ctl) => ctl?.dispose());
      ro.disconnect();
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      const disposed = new Set<THREE.Material | THREE.BufferGeometry>();
      scenes.forEach((s) => {
        if (!s) return;
        s.traverse((obj) => {
          const mesh = obj as THREE.Mesh;
          if (mesh.material) {
            const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            mats.forEach((m) => m && !disposed.has(m) && (disposed.add(m), m.dispose()));
          }
          if (mesh.geometry && !disposed.has(mesh.geometry)) {
            disposed.add(mesh.geometry);
            mesh.geometry.dispose();
          }
        });
        s.clear();
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="w-full relative">
      <div
        ref={containerRef}
        className="w-full rounded-sm border border-white/[0.08] overflow-hidden bg-[#1a3d1a] md:h-[320px] h-[1280px] cursor-grab active:cursor-grabbing"
      />
      {interactiveIndex !== null && (
        <p className="text-xs text-white/50 mt-2 text-center" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
          Drag to orbit · Scroll to zoom · Press <kbd className="px-1 bg-white/10 rounded">Esc</kbd> to exit
        </p>
      )}
      <div
        className={`flex mt-2 px-1 ${isMobile ? "flex-col gap-1" : "flex-row justify-between"}`}
      >
        {MODELS.map((m) => (
          <span
            key={m.src}
            className="text-xs text-white/50 uppercase tracking-wider flex-1 text-center"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            {m.label}
          </span>
        ))}
      </div>
    </div>
  );
}
