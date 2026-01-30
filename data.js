var APP_DATA = {
  "scenes": [
    {
      "id": "0-bj2a-dji_01",
      "name": "BJ2A-DJI_01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.1299144150487166,
        "pitch": 0.05779530694972479,
        "fov": 1.3412181875493232
      },
      "linkHotspots": [
        {
          "yaw": 0.27290025259275197,
          "pitch": 0.17856115242262405,
          "rotation": 0,
          "target": "1-bj2a-dji_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bj2a-dji_02",
      "name": "BJ2A-DJI_02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.12653972098019395,
        "pitch": 0.0914046954942318,
        "fov": 1.3412181875493232
      },
      "linkHotspots": [
        {
          "yaw": -0.16602132921268975,
          "pitch": 0.16344525179514235,
          "rotation": 0,
          "target": "0-bj2a-dji_01"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BJ-2A",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
