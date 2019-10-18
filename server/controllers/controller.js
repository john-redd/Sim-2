module.exports = {
  getAllHouses: (req, res) => {
    const db = req.app.get('db');

    db.get_houses()
    .then(houses => res.status(200).send(houses))
    .catch(err => res.status(500).send(err))
  }
}