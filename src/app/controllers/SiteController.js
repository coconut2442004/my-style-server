const CodeBlock = require("../models/CodeBlock");
class SitesController {
  index = (req, res, next) => {
    res.json({
      message: "server is running",
    });
  };

  data = (req, res, next) => {
    CodeBlock.find({})
      .then((code) => {
        res.status(201).json({
          message: "Document finded successfully",
          result: code,
        });
      })
      .catch((error) => {
        console.error(err);
        res.status(500).json({ error: err });
      });
  };

  add = (req, res, next) => {
    const newDocument = new CodeBlock(req.body);
    newDocument
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: "Document created successfully",
          createdDocument: result,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err });
      });
  };

  find = (req, res, next) => {
    const valueFind = req.params.slug;
    if (valueFind === "All") {
      CodeBlock.find({})
        .then((result) => {
          console.log(result);
          res.status(201).json({
            message: "Document finded successfully",
            result: result,
          });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json({ error: err });
        });
    } else {
      CodeBlock.find({ filter: valueFind })
        .then((result) => {
          console.log(result);
          res.status(201).json({
            message: "Document finded successfully",
            result: result,
          });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json({ error: err });
        });
    }
  };

  template = (req, res, next) => {
    const valueFind = req.params.id;
    console.log(valueFind);
    CodeBlock.find({ "author.id": valueFind })
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: "Document finded successfully",
          result: result,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err });
      });
  };
  update = (req, res, next) => {
    const idUpdate = req.params.id;
    CodeBlock.updateOne({ _id: idUpdate }, req.body)
      .then((res) => {
        console.log(result);
        res.status(201).json({
          message: "Document finded successfully",
          result: result,
        });
      })
      .catch((error) => {
        console.error(err);
        res.status(500).json({ error: err });
      });
  };
}

module.exports = new SitesController();
