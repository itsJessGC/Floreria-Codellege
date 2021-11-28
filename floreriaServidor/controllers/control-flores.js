const Flores = require("../models/Flores");

exports.addFlower = async(req, res) => {
    try {
        let flower;

        //create a flower
        flower = new Flores(req.body);

        await flower.save();
        res.send(flower);

    } catch (e) {
        console.log(e);
        res.status(500).send("There has been an error");
    }
}

exports.getFlowers = async(req, res) => {
    try {
        const flowers = await Flores.find();
        res.json(flowers);

    } catch (e) {
        console.log(e);
        res.status(500).send("There has been an error");
    }
}

exports.modifyFlower = async(req, res) => {
    try {
        const { name, location, amount, price } = req.body;
        let flower = await Flores.findById(req.params.id);

        if (!flower) {
            res.status(404).json({ msg: 'Flower does not exist' });
        }

        flower.name = name;
        flower.location = location;
        flower.amount = amount;
        flower.price = price;

        flower = await Flores.findOneAndUpdate({ _id: req.params.id }, flower, { new: true });
        res.json(flower);

    } catch (e) {
        console.log(e);
        res.status(500).send("There has been an error");
    }
}

exports.getFlower = async(req, res) => {
    try {
        let flower = await Flores.findById(req.params.id);

        if (!flower) {
            res.status(404).json({ msg: 'Flower does not exist' });
        }

        res.json(flower);

    } catch (e) {
        console.log(e);
        res.status(500).send("There has been an error");
    }
}

exports.deleteFlower = async(req, res) => {
    try {
        let flower = await Flores.findById(req.params.id);

        if (!flower) {
            res.status(404).json({ msg: 'Flower does not exist' });
        }

        await Flores.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: "Flower deleted" });

    } catch (e) {
        console.log(e);
        res.status(500).send("There has been an error");
    }
}

exports.searchFlowers = async(req, res) => {
    try {
        const flowers = await Flores.find({ location: req.params.location });
        res.json(flowers);

    } catch (e) {
        console.log(e);
        res.status(500).send("There has been an error");
    }
}