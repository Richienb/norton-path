"use strict"

const fs = require("fs")
const path = require("path")

module.exports = (() => {
	// If platform is not Windows.
	if (process.platform !== "win32") return null

	// Join directory.
	const joinedDir = path.resolve(process.env.ProgramFiles, "Norton Security", "Engine")

	// If the directory does not exist.
	if (!fs.existsSync(joinedDir)) return null

	// Select the first sub-directory.
	const verDir = fs.readdirSync(joinedDir)[0]

	// Join the final directory.
	const dir = path.resolve(joinedDir, verDir, "Navw32.exe")

	// If the directory does not exist.
	if (!fs.existsSync(dir)) return null

	// Return the directory.
	return dir
})()
