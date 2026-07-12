export default function Atmosphere() {
  return (
    <div className="fixed inset-0 z-[5] pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
}
