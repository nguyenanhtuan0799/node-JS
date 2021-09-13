module.exports = {
    multiMongoToObj: function (mongoArr) {
        return mongoArr.map((c) => c.toObject());
    },
    mongoToObj: function (mongoArr) {
        return mongoArr ? mongoArr.toObject() : mongoArr;
    },
};
