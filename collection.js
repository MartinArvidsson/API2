"use strict";

function Collection(name, id)
{
    this.name = name
    this.id = id;
    this.artifactList = [];
}

Collection.prototype.getName = function() {
    return this.name;
};

Collection.prototype.getID = function()
{
    return this.id;
};

module.exports = Collection;