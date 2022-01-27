// lmd.js

const fakeTokenUser = {
  access_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiY29udGEiOnsiYXRpdm8iOnRydWUsInByaXZpbGVnaW8iOiJQUk9QUklFVEFSSU8iLCJub21lIjoiSm9uIFNub3cgRnJvbnRlbmQiLCJ1dWlkIjoiYmM2ZmNmN2ItOWM5MS00M2UzLTlkZDItMDRhMWNkYzYwZWZjIiwiZW1haWwiOiJqb25zbm93QG5pZ2h0c3dhdGNoLmNvbSIsInVybEltYWdlbVBlcmZpbCI6Imh0dHBzOi8vdGhpc3BlcnNvbmRvZXNub3RleGlzdC5jb20vaW1hZ2UiLCJtb2R1bG9zIjpbIkNMSUVOVEVTIiwiQ0FMQ1VMT1MiLCJQRVRJQ09FUyIsIkNBU09TIl19fQ.bujf96f-aOtVA9MqiYfpNsxBUgrt8zQl9ie4m16ZBxc",
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
    if (req.path === "/__rules" || req.path === "/db") {
      next();
    } else if (!req.headers.authorization) {
      res.status(401).json({ message: "requisição não permitida" });
      return;
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
