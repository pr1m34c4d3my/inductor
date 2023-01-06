import express, { Express, Request, Response } from "express";

let router = express.Router();

type Post = {
  id: number;
  title: string;
  description: string;
};

router.get("/", (req: Request, res: Response) => {
  res.status(200).json([
    {
      id: 1,
      title: "Judul Pertama",
      description: "Ini deskripsi",
    },
    {
      id: 2,
      title: "Judul Kedua",
      description: "Ini deskripsi kedua",
    },
    {
      id: 3,
      title: "Judul Ketiga",
      description: "Deskripsi ketiga",
    },
  ]);
});

module.exports = router;
