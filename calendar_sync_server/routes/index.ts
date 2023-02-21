// const express = require("express");
// import * as express from "express";

var router = require("express").Router();

require("./appointment_route")(router);

module.exports.router = router;
