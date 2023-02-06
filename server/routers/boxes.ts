import { Router } from 'express';
const router = Router();

interface Box {
  id: number,
  label: string,
  link: string
};

const boxes : Box[] = [{id:0, label: "First box", link: "F Link"}, {id:1, label: "Secend box", link: "S Link"}];
router.put("/:id",async function (req, res, next) {
  const id = Number(req.params.id);
  boxes[id].label = await req.body.label;
  boxes[id].link = await req.body.link;
  console.log(req.body)
  return res.status(200).json(boxes[id]);
});

/* GET label of all boxes. */
router.get("/labels", function (req, res, next) {
    const labels = boxes.map((box) => box.label)
    return res.status(200).json(labels);
});

/* GET link. auth */
router.get("/link/:id", function (req, res, next) {
  const link = boxes[Number(req.params.id)].link;
  return res.status(200).json(link);
});


module.exports = router;