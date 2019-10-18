module.exports = {
  getAllHouses: (req, res) => {
    const db = req.app.get('db');

    db.get_houses()
    .then(houses => res.status(200).send(houses))
    .catch(err => res.status(500).send(err));
  },
  addHouse: async (req, res) => {
    const db = req.app.get('db');
    const {name, address, city, state, zip, img, mortgage, rent} = req.body;

    await db.add_house(name, address, city, state, zip, img, mortgage, rent)
    .then(() => res.status(200).send('House added.'))
    .catch(err => res.status(500).send(err));
  },
  deleteHouse: async (req, res) => {
    const db = req.app.get('db');
    const {id} = req.params;

    await db.delete_house(id)
    .then(() => console.log('House deleted.'))
    .catch(err => console.log(err));

    await db.get_houses()
    .then(houses => res.status(200).send(houses))
    .catch(err => res.status(500).send(err));
  }
}