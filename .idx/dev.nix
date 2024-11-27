{ pkgs }: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
    pkgs.pnpm
    pkgs.openssl
  ];
  idx.extensions = [
    "esbenp.prettier-vscode"
    "bradlc.vscode-tailwindcss"
    "dsznajder.es7-react-js-snippets"
    "formulahendry.auto-close-tag"
    "formulahendry.auto-complete-tag"
    "formulahendry.auto-rename-tag"
    "ygqygq2.turbo-print-log"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "pnpm"
          "run"
          "dev"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
  idx.workspace.onCreate = {
    "pnpm-install" = "pnpm install";
  };
}
