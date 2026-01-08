const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large morphing blob */}
      <div 
        className="absolute -top-20 -right-20 w-96 h-96 bg-brand-200/30 animate-morph"
        style={{ animationDelay: "0s" }}
      />
      
      {/* Floating circles */}
      <div 
        className="absolute top-1/4 left-10 w-4 h-4 rounded-full border border-border animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div 
        className="absolute top-1/3 right-20 w-6 h-6 rounded-full bg-brand-50 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-3 h-3 rounded-full border border-border animate-float-slow"
        style={{ animationDelay: "2s" }}
      />
      
      {/* Rotating ring */}
      <div className="absolute top-1/2 right-1/3 w-32 h-32 border border-border/30 rounded-full animate-rotate-slow" />
      
      {/* Gradient orb */}
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-gradient-to-br from-brand-200 to-transparent animate-pulse-glow" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
};

export default FloatingShapes;
