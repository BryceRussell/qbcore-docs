---
title: 🏠 qb-interior
description: Which shell will it be?
---

## Introduction

* Handles all the logic for spawning shell models by exporting functions that can be called in other client-side files

## Configuration

:::tip
This resource requires no configuration unless you want to add more exports
:::

## What's included?

:::note
The below pdf file shows which shell models come by default
:::

{% file src="../../../assets/k4mb1shellstarter.pdf" %}

:::tip
Optionally, this resource comes pre-configured for all of [K4MB1](https://www.k4mb1maps.com/) shells!
:::

## Usage example

```lua
RegisterCommand('spawnshell', function()
    local ped = PlayerPedId()
    local coords = GetEntityCoords(ped)
    local shell = exports['qb-interior']:CreateApartmentShell(coords)
end)
```
