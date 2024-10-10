interface Link {
    name: string;
    icon: string;
    path: string;
    isSpecial?: boolean;
  }
  
  export const links: Link[] = [
    { name: "Inicio", icon: "home", path: "/" },
    { name: "Análisis", icon: "graph", path: "/stats" },
    { name: "", icon: "plus", path: "/scan", isSpecial: true },
    { name: "Metas", icon: "graph", path: "/graph" },
    { name: "Perfil", icon: "profile", path: "/profile" },
  ];
  