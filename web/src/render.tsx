import path from "path"

import { render } from 'preact-render-to-string';

import { readFileSync, existsSync, mkdirSync, writeFileSync, readdirSync } from 'fs'
import {exec} from 'child_process'

import { PageView } from './page';

import { PresetsIndex } from "."

const ROOT_DIR = "../data"

export type Preset = {
    slot: string
    name: string
    tags: string[]
}

export type TextSection = {
    name: string
    content: string
}

export type Link = {
    title: string
    url: string
}

export type PresetBank = {
    name: string
    presets: Preset[]
}

export type PresetList = {
    banks: PresetBank[]
}

export type Device = {
    name: string
    path: string
    manufacturer: string
    description: string
    presets: PresetList
}

export type Manufacturer = {
    name: string
    website: string
    devices: Device[]
}

export type DeviceIndex = {
    manufacturer: Manufacturer[]
}

let devices: DeviceIndex = {
    manufacturer: []
}

const loadPresets = async (device: Device) => {
    const data = readFileSync(`${ROOT_DIR}/${device.path}/presets.json`)
    device.presets = JSON.parse(data) as PresetList
}

const loadData = async () => {
    const data = readFileSync(`${ROOT_DIR}/devices.json`)
    devices = JSON.parse(data) as DeviceIndex

    for (let m of devices.manufacturer) {
        for (let k of m.devices) {
            await loadPresets(k)
            k.manufacturer = m.name
        }
    }
}

const renderIndex = async () => { 
    const index = render(<PresetsIndex devices={devices} />)
    writeFileSync("../docs/index.html", `
    <!DOCTYPE html>
    ${index}
    `)
}

const renderPage = async (d: Device) => {
    const outdir = path.join("../docs/devices", d.path)
    if (!existsSync(outdir)) {
        mkdirSync(outdir, { recursive: true })
    }

    const page = render(<PageView device={d} />)

    writeFileSync(`../docs/devices/${d.path}/index.html`, `
    <!DOCTYPE html>
    ${page}
    `)

    writeFileSync(`../docs/devices/${d.path}/device.json`, JSON.stringify(d))
}

const renderSite = async () => {
    await loadData()
    await renderIndex()

    for (let m of devices.manufacturer) {
        for (let k of m.devices) {
            await renderPage(k)
        }
    }
}

renderSite()