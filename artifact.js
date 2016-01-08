"use strict";

function Artifact(name, id)
{
    this.name = name
    this.id = id;
}

Artifact.prototype.name = function()
{
    return this.name;
}

Artifact.prototype.id = function()
{
    return this.id;
}

module.exports = Artifact();

