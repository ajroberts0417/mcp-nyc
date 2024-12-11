{
  inputs = {
    systems.url = "github:nix-systems/default";
  };

  outputs =
    { systems, nixpkgs, ... }@inputs:
    let
      eachSystem = f: nixpkgs.lib.genAttrs (import systems) (system:
        f nixpkgs.legacyPackages.${system});
    in
    {
      packages = eachSystem (pkgs: {});

      devShells = eachSystem (pkgs: {
        default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs
            nodePackages.pnpm
          ];
        };
      });
    };
}
