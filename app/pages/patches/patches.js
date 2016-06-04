import {Page, NavController, NavParams, Alert} from 'ionic-angular';
import {PatchPage} from '../patch/patch';

import {AlertCommon} from '../../common/alert';

@Page({
  templateUrl: 'build/pages/patches/patches.html'
})
export class PatchesPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, params) {
    this.nav = nav;
    //this.bank = params.get('bank');
    this.bank = {
        "index": 1,
        "name": "Shows",
        "patches": [
            {
                "name": "Shows",
                "effects" : [
                    {
                        "name": "Distortion drive",
                        "company": "MOD",
                        "params": [
                            {
                                "name": "ratio",
                                "min": 0,
                                "max": 10,
                                "current": 5
                            },
                            {
                                "name": "volume",
                                "min": 0,
                                "max": 100,
                                "current": 5,
                                "unit": "%"
                            }
                        ],
                        "active" : false
                    },
                    {
                        "name": "Test drive",
                        "company": "Guitarix",
                        "params": [
                            {
                                "name": "ratio",
                                "min": 0,
                                "max": 10,
                                "current": 5
                            },
                            {
                                "name": "volume",
                                "min": 0,
                                "max": 100,
                                "current": 5,
                                "unit": "%"
                            }
                        ],
                        "active" : true
                    }
                ],
                "connections" : [
                    {
                        "out": "system:capture_1",
                        "in": "effect_1:bass_l"
                    },
                    {
                        "out": "effect_1:out1",
                        "in": "effect_2:input"
                    },
                    {
                        "out": "effect_2:out",
                        "in": "system:playback_1"
                    }
                ]
            },
            {
                "name": "Shows2",
                "effects" : [
                    {
                        "name": "Distortion drive",
                        "company": "MOD",
                        "params": [
                            {
                                "name": "ratio",
                                "min": 0,
                                "max": 10,
                                "current": 5
                            },
                            {
                                "name": "volume",
                                "min": 0,
                                "max": 100,
                                "current": 5,
                                "unit": "%"
                            }
                        ],
                        "active" : false
                    },
                    {
                        "name": "Test drive",
                        "company": "Guitarix",
                        "params": [
                            {
                                "name": "ratio",
                                "min": 0,
                                "max": 10,
                                "current": 5
                            },
                            {
                                "name": "volume",
                                "min": 0,
                                "max": 100,
                                "current": 5,
                                "unit": "%"
                            }
                        ],
                        "active" : true
                    }
                ],
                "connections" : [
                    {
                        "out": "system:capture_1",
                        "in": "effect_1:bass_l"
                    },
                    {
                        "out": "effect_1:out1",
                        "in": "effect_2:input"
                    },
                    {
                        "out": "effect_2:out",
                        "in": "system:playback_1"
                    }
                ]
            },
            {
                "name": "Shows3",
                "effects" : [
                    {
                        "name": "Distortion drive",
                        "company": "MOD",
                        "params": [
                            {
                                "name": "ratio",
                                "min": 0,
                                "max": 10,
                                "current": 5
                            },
                            {
                                "name": "volume",
                                "min": 0,
                                "max": 100,
                                "current": 5,
                                "unit": "%"
                            }
                        ],
                        "active" : false
                    },
                    {
                        "name": "Test drive",
                        "company": "Guitarix",
                        "params": [
                            {
                                "name": "ratio",
                                "min": 0,
                                "max": 10,
                                "current": 5
                            },
                            {
                                "name": "volume",
                                "min": 0,
                                "max": 100,
                                "current": 5,
                                "unit": "%"
                            }
                        ],
                        "active" : true
                    }
                ],
                "connections" : [
                    {
                        "out": "system:capture_1",
                        "in": "effect_1:bass_l"
                    },
                    {
                        "out": "effect_1:out1",
                        "in": "effect_2:input"
                    },
                    {
                        "out": "effect_2:out",
                        "in": "system:playback_1"
                    }
                ]
            }
        ]
    };
  }

  createPatch() {
    let alert = AlertCommon.generate('New patch', data => console.log(data));
    this.nav.present(alert);
  }

  itemSelected(patch) {
    this.nav.push(PatchPage, {'patch': patch});
  }
}
