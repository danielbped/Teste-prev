// lmd.js

const fakeTokenUser = {
  access_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiY29udGEiOnsiYXRpdm8iOnRydWUsInByaXZpbGVnaW8iOiJQUk9QUklFVEFSSU8iLCJub21lIjoiSm9uIFNub3cgRnJvbnRlbmQiLCJ1dWlkIjoiYmM2ZmNmN2ItOWM5MS00M2UzLTlkZDItMDRhMWNkYzYwZWZjIiwiZW1haWwiOiJqb25zbm93QG5pZ2h0c3dhdGNoLmNvbSIsInVybEltYWdlbVBlcmZpbCI6Imh0dHBzOi8vdGhpc3BlcnNvbmRvZXNub3RleGlzdC5jb20vaW1hZ2UifX0.g47GGrfdWe1NecNrXraIuuaLhoN70yRNjhcLvsNYqvE",
  token_type: "Bearer",
};

module.exports = (req, res, next) => {
  if (req.method == "POST" && req.path == "/oauth") {
    if (req.body.username === "teste" && req.body.password === "frontend") {
      res.status(200).json(fakeTokenUser);
    } else {
      res.status(401).json({ message: "Usuário ou senha inválidos" });
    }
  } else {
    if (!req.headers.authorization) {
      res.status(401).json({ message: "requisição não permitida" });
    } else {
      let token = req.headers.authorization.split(" ")[1];
      if (token !== fakeTokenUser.access_token) {
        res.status(401).json({ message: "token de acesso inválido" });
        return;
      }
    }
    next();
  }
};
