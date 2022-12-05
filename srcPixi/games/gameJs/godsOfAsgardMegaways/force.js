var forceDemo= {
    "win1":[
    {
      "response" : {
        "bet" : {
          "stake" : 1.0,
          "stakePerLine" : 0.1,
          "balance" : null,
          "addBalance" : 0.0,
          "lines" : 10,
          "settle" : true,
          "buyIn" : false
        },
        "results" : {
          "win" : {
            "total" : 0,
            "symbolWin" : {
              "coins" : 0,
              "symbols" : [ ]
            },
            "scatterWin" : {
              "coins" : 0,
              "scatters" : [ ]
            }
          },
          "reels" : [ [ {
            "smbID" : 3
          }, {
            "smbID" : 3
          }, {
            "smbID" : 3
          }, {
            "smbID" : 0
          } ], [ {
            "smbID" : 4
          }, {
            "smbID" : 2
          }, {
            "smbID" : 12,
            "animate" : true
          }, {
            "smbID" : 2
          }, {
            "smbID" : 7
          } ], [ {
            "smbID" : 6
          }, {
            "smbID" : 6
          }, {
            "smbID" : 0
          }, {
            "smbID" : 6
          } ], [ {
            "smbID" : 12,
            "animate" : true
          }, {
            "smbID" : 0
          } ], [ {
            "smbID" : 1
          }, {
            "smbID" : 6
          }, {
            "smbID" : 4
          }, {
            "smbID" : 5
          } ], [ {
            "smbID" : 2
          }, {
            "smbID" : 2
          }, {
            "smbID" : 9
          } ] ]
        },
        "horizontalReel" : [ [ {
          "smbID" : 3,
          "size" : 4
        }, {
          "smbID" : 4,
          "size" : 4
        }, {
          "smbID" : 0,
          "size" : 4
        }, {
          "smbID" : 9,
          "size" : 4
        } ] ],
        "state" : {
          "reelSet" : "baseGameReels2",
          "status" : "NORMAL",
          "tumble" : false,
          "wonAdditionalSpins" : 0,
          "wonAdditionalMult" : 0,
          "freespinsRemaining" : 0,
          "totalWin" : 0,
          "featureLevel" : -1,
          "explode" : false,
          "numTumbles" : 0,
          "reelHeights" : [ 4, 5, 4, 2, 4, 3 ],
          "mult" : 1,
          "anticipate" : [ 4, 5 ]
        }
      }
    }],
    "win2":
    [
        {
            "response" : {
                "bet" : {
                    "stake" : 1.0,
                    "stakePerLine" : 0.1,
                    "balance" : null,
                    "addBalance" : 0.0,
                    "lines" : 10,
                    "settle" : false,
                    "buyIn" : false
                },
                "results" : {
                    "win" : {
                        "total" : 10,
                        "symbolWin" : {
                            "coins" : 10,
                            "symbols" : [ {
                                "dir" : "LEFT",
                                "smbID" : 8,
                                "lineID" : 3,
                                "amt" : 10,
                                "num" : 3,
                                "ways" : 1,
                                "mult" : 1
                            } ]
                        },
                        "scatterWin" : {
                            "coins" : 0,
                            "scatters" : [ ]
                        }
                    },
                    "reels" : [ [ {
                        "smbID" : 0,
                        "sticky" : true,
                        "tumble" : true
                    }, {
                        "smbID" : 0,
                        "sticky" : true,
                        "tumble" : true
                    }, {
                        "smbID" : 3,
                        "sticky" : true,
                        "tumble" : true
                    }, {
                        "smbID" : 8,
                        "explode" : true
                    } ], [ {
                        "smbID" : 4,
                        "sticky" : true
                    }, {
                        "smbID" : 3,
                        "sticky" : true
                    } ], [ {
                        "smbID" : 8,
                        "explode" : true
                    }, {
                        "smbID" : 1,
                        "sticky" : true
                    }, {
                        "smbID" : 6,
                        "sticky" : true
                    }, {
                        "smbID" : 12,
                        "sticky" : true,
                        "animate" : true
                    } ], [ {
                        "smbID" : 2,
                        "sticky" : true
                    }, {
                        "smbID" : 0,
                        "sticky" : true
                    }, {
                        "smbID" : 12,
                        "sticky" : true,
                        "animate" : true
                    }, {
                        "smbID" : 1,
                        "sticky" : true
                    }, {
                        "smbID" : 2,
                        "sticky" : true
                    }, {
                        "smbID" : 1,
                        "sticky" : true
                    }, {
                        "smbID" : 2,
                        "sticky" : true
                    } ], [ {
                        "smbID" : 8,
                        "sticky" : true
                    }, {
                        "smbID" : 3,
                        "sticky" : true
                    }, {
                        "smbID" : 1,
                        "sticky" : true
                    }, {
                        "smbID" : 0,
                        "sticky" : true
                    } ], [ {
                        "smbID" : 0,
                        "sticky" : true
                    }, {
                        "smbID" : 2,
                        "sticky" : true
                    } ] ]
                },
                "horizontalReel" : [ [ {
                    "smbID" : 8,
                    "explode" : true,
                    "size" : 4
                }, {
                    "smbID" : 0,
                    "tumble" : true,
                    "size" : 4
                }, {
                    "smbID" : 1,
                    "tumble" : true,
                    "size" : 4
                }, {
                    "smbID" : 0,
                    "tumble" : true,
                    "size" : 4
                } ] ],
                "state" : {
                    "reelSet" : "baseGameReels2",
                    "status" : "NORMAL",
                    "tumble" : true,
                    "wonAdditionalSpins" : 0,
                    "wonAdditionalMult" : 0,
                    "freespinsRemaining" : 0,
                    "totalWin" : 10,
                    "featureLevel" : 0,
                    "explode" : false,
                    "numTumbles" : 1,
                    "reelHeights" : [ 4, 2, 4, 7, 4, 2 ],
                    "mult" : 1,
                    "anticipate" : [ 4, 5 ]
                }
            }
        },
        {
            "response" : {
                "bet" : {
                    "stake" : 1.0,
                    "stakePerLine" : 0.1,
                    "balance" : null,
                    "addBalance" : 1.0,
                    "lines" : 10,
                    "settle" : true,
                    "buyIn" : false
                },
                "results" : {
                    "win" : {
                        "total" : 0,
                        "symbolWin" : {
                            "coins" : 0,
                            "symbols" : [ ]
                        },
                        "scatterWin" : {
                            "coins" : 0,
                            "scatters" : [ ]
                        }
                    },
                    "reels" : [ [ {
                        "smbID" : 5
                    }, {
                        "smbID" : 0
                    }, {
                        "smbID" : 0
                    }, {
                        "smbID" : 3
                    } ], [ {
                        "smbID" : 4
                    }, {
                        "smbID" : 3
                    } ], [ {
                        "smbID" : 9
                    }, {
                        "smbID" : 1
                    }, {
                        "smbID" : 6
                    }, {
                        "smbID" : 12,
                        "animate" : true
                    } ], [ {
                        "smbID" : 2
                    }, {
                        "smbID" : 0
                    }, {
                        "smbID" : 12,
                        "animate" : true
                    }, {
                        "smbID" : 1
                    }, {
                        "smbID" : 2
                    }, {
                        "smbID" : 1
                    }, {
                        "smbID" : 2
                    } ], [ {
                        "smbID" : 8
                    }, {
                        "smbID" : 3
                    }, {
                        "smbID" : 1
                    }, {
                        "smbID" : 0
                    } ], [ {
                        "smbID" : 0
                    }, {
                        "smbID" : 2
                    } ] ]
                },
                "horizontalReel" : [ [ {
                    "smbID" : 0,
                    "size" : 4
                }, {
                    "smbID" : 1,
                    "size" : 4
                }, {
                    "smbID" : 0,
                    "size" : 4
                }, {
                    "smbID" : 6,
                    "size" : 4
                } ] ],
                "state" : {
                    "reelSet" : "baseGameReels2",
                    "status" : "NORMAL",
                    "tumble" : false,
                    "wonAdditionalSpins" : 0,
                    "wonAdditionalMult" : 0,
                    "freespinsRemaining" : 0,
                    "totalWin" : 10,
                    "featureLevel" : -1,
                    "explode" : false,
                    "numTumbles" : 0,
                    "reelHeights" : [ 4, 2, 4, 7, 4, 2 ],
                    "mult" : 1,
                    "anticipate" : [ ]
                }
            }
        }
    ],
    "win3":[
{
  "response" : {
    "bet" : {
      "stake" : 1.0,
      "stakePerLine" : 0.1,
      "balance" : null,
      "addBalance" : 0.0,
      "lines" : 10,
      "settle" : false,
      "buyIn" : false
    },
    "results" : {
      "win" : {
        "total" : 5,
        "symbolWin" : {
          "coins" : 5,
          "symbols" : [ {
            "dir" : "LEFT",
            "smbID" : 6,
            "lineID" : 1,
            "amt" : 5,
            "num" : 4,
            "ways" : 1,
            "mult" : 1
          } ]
        },
        "scatterWin" : {
          "coins" : 0,
          "scatters" : [ ]
        }
      },
      "reels" : [ [ {
        "smbID" : 0,
        "sticky" : true,
        "tumble" : true
      }, {
        "smbID" : 6,
        "explode" : true
      }, {
        "smbID" : 0,
        "sticky" : true
      } ], [ {
        "smbID" : 6,
        "explode" : true,
        "transform" : "14",
        "prevSmbID" : "2"
      }, {
        "smbID" : 7,
        "sticky" : true
      }, {
        "smbID" : 4,
        "sticky" : true
      } ], [ {
        "smbID" : 5,
        "sticky" : true,
        "tumble" : true
      }, {
        "smbID" : 1,
        "sticky" : true,
        "tumble" : true
      }, {
        "smbID" : 5,
        "sticky" : true,
        "tumble" : true
      }, {
        "smbID" : 6,
        "explode" : true,
        "transform" : "14",
        "prevSmbID" : "5"
      } ], [ {
        "smbID" : 2,
        "sticky" : true,
        "tumble" : true
      }, {
        "smbID" : 0,
        "sticky" : true,
        "tumble" : true
      }, {
        "smbID" : 12,
        "sticky" : true,
        "tumble" : true,
        "animate" : true
      }, {
        "smbID" : 1,
        "sticky" : true,
        "tumble" : true
      }, {
        "smbID" : 10,
        "explode" : true
      } ], [ {
        "smbID" : 2,
        "sticky" : true
      }, {
        "smbID" : 12,
        "sticky" : true,
        "animate" : true
      }, {
        "smbID" : 0,
        "sticky" : true
      } ], [ {
        "smbID" : 7,
        "sticky" : true
      }, {
        "smbID" : 8,
        "sticky" : true
      }, {
        "smbID" : 3,
        "sticky" : true
      }, {
        "smbID" : 2,
        "sticky" : true
      } ] ]
    },
    "horizontalReel" : [ [ {
      "smbID" : 4,
      "size" : 4
    }, {
      "smbID" : 0,
      "size" : 4
    }, {
      "smbID" : 4,
      "size" : 4
    }, {
      "smbID" : 14,
      "explode" : true,
      "size" : 4
    } ] ],
    "state" : {
      "reelSet" : "baseGameReels3",
      "status" : "NORMAL",
      "tumble" : true,
      "wonAdditionalSpins" : 0,
      "wonAdditionalMult" : 0,
      "freespinsRemaining" : 0,
      "totalWin" : 5,
      "featureLevel" : 0,
      "explode" : true,
      "numTumbles" : 1,
      "reelHeights" : [ 3, 3, 4, 5, 3, 4 ],
      "mult" : 1,
      "anticipate" : [ 5 ]
    }
  }
},
{
  "response" : {
    "bet" : {
      "stake" : 1.0,
      "stakePerLine" : 0.1,
      "balance" : null,
      "addBalance" : 0.5,
      "lines" : 10,
      "settle" : true,
      "buyIn" : false
    },
    "results" : {
      "win" : {
        "total" : 0,
        "symbolWin" : {
          "coins" : 0,
          "symbols" : [ ]
        },
        "scatterWin" : {
          "coins" : 0,
          "scatters" : [ ]
        }
      },
      "reels" : [ [ {
        "smbID" : 1
      }, {
        "smbID" : 0
      }, {
        "smbID" : 0
      } ], [ {
        "smbID" : 2
      }, {
        "smbID" : 7
      }, {
        "smbID" : 4
      } ], [ {
        "smbID" : 3
      }, {
        "smbID" : 5
      }, {
        "smbID" : 1
      }, {
        "smbID" : 5
      } ], [ {
        "smbID" : 0
      }, {
        "smbID" : 2
      }, {
        "smbID" : 0
      }, {
        "smbID" : 12,
        "animate" : true
      }, {
        "smbID" : 1
      } ], [ {
        "smbID" : 2
      }, {
        "smbID" : 12,
        "animate" : true
      }, {
        "smbID" : 0
      } ], [ {
        "smbID" : 7
      }, {
        "smbID" : 8
      }, {
        "smbID" : 3
      }, {
        "smbID" : 2
      } ] ]
    },
    "horizontalReel" : [ [ {
      "smbID" : 4,
      "size" : 4
    }, {
      "smbID" : 0,
      "size" : 4
    }, {
      "smbID" : 4,
      "size" : 4
    }, {
      "smbID" : 1,
      "size" : 4
    } ] ],
    "state" : {
      "reelSet" : "baseGameReels2",
      "status" : "NORMAL",
      "tumble" : false,
      "wonAdditionalSpins" : 0,
      "wonAdditionalMult" : 0,
      "freespinsRemaining" : 0,
      "totalWin" : 5,
      "featureLevel" : -1,
      "explode" : false,
      "numTumbles" : 0,
      "reelHeights" : [ 3, 3, 4, 5, 3, 4 ],
      "mult" : 1,
      "anticipate" : [ 5 ]
    }
  }
}
    ],
    "win4":[
    {
      "response" : {
        "bet" : {
          "stake" : 1.0,
          "stakePerLine" : 0.1,
          "balance" : null,
          "addBalance" : 0.0,
          "lines" : 10,
          "settle" : false,
          "buyIn" : false
        },
        "results" : {
          "win" : {
            "total" : 18,
            "symbolWin" : {
              "coins" : 18,
              "symbols" : [ {
                "dir" : "LEFT",
                "smbID" : 4,
                "lineID" : 0,
                "amt" : 18,
                "num" : 5,
                "ways" : 3,
                "mult" : 1
              } ]
            },
            "scatterWin" : {
              "coins" : 0,
              "scatters" : [ ]
            }
          },
          "reels" : [ [ {
            "smbID" : 4,
            "explode" : true
          }, {
            "smbID" : 3,
            "sticky" : true
          }, {
            "smbID" : 12
          } ], [ {
            "smbID" : 2,
            "sticky" : true,
            "tumble" : true
          }, {
            "smbID" : 4,
            "explode" : true
          }, {
            "smbID" : 3,
            "sticky" : true
          }, {
            "smbID" : 12
          } ], [ {
            "smbID" : 1,
            "sticky" : true
          }, {
            "smbID" : 6,
            "sticky" : true
          }, {
            "smbID" : 1,
            "sticky" : true
          }, {
            "smbID" : 12
          }, {
            "smbID" : 8,
            "sticky" : true
          }, {
            "smbID" : 9,
            "sticky" : true
          } ], [ {
            "smbID" : 4,
            "explode" : true
          }, {
            "smbID" : 12
          }, {
            "smbID" : 2,
            "sticky" : true
          }, {
            "smbID" : 2,
            "sticky" : true
          } ], [ {
            "smbID" : 4,
            "explode" : true
          }, {
            "smbID" : 1,
            "sticky" : true,
            "tumble" : true
          }, {
            "smbID" : 2,
            "sticky" : true,
            "tumble" : true
          }, {
            "smbID" : 4,
            "explode" : true
          }, {
            "smbID" : 12,
            "sticky" : true
          } ], [ {
            "smbID" : 5,
            "sticky" : true
          }, {
            "smbID" : 6,
            "sticky" : true
          } ] ]
        },
        "horizontalReel" : [ [ {
          "smbID" : 8,
          "size" : 4
        }, {
          "smbID" : 4,
          "explode" : true,
          "size" : 4
        }, {
          "smbID" : 5,
          "tumble" : true,
          "size" : 4
        }, {
          "smbID" : 4,
          "explode" : true,
          "size" : 4
        } ] ],
        "state" : {
          "reelSet" : "baseGameReels2",
          "status" : "NORMAL",
          "tumble" : true,
          "wonAdditionalSpins" : 0,
          "wonAdditionalMult" : 0,
          "freespinsRemaining" : 0,
          "totalWin" : 18,
          "featureLevel" : 0,
          "explode" : false,
          "numTumbles" : 1,
          "reelHeights" : [ 2, 3, 6, 4, 5, 2 ],
          "mult" : 1,
          "anticipate" : [ 2, 3, 4, 5 ]
        }
      }
    },
    {
      "response" : {
        "bet" : {
          "stake" : 1.0,
          "stakePerLine" : 0.1,
          "balance" : null,
          "addBalance" : 1.8,
          "lines" : 10,
          "settle" : true,
          "buyIn" : false
        },
        "results" : {
          "win" : {
            "total" : 0,
            "symbolWin" : {
              "coins" : 0,
              "symbols" : [ ]
            },
            "scatterWin" : {
              "coins" : 0,
              "scatters" : [ ]
            }
          },
          "reels" : [ [ {
            "smbID" : 5
          }, {
            "smbID" : 3
          } ], [ {
            "smbID" : 4
          }, {
            "smbID" : 2
          }, {
            "smbID" : 3
          } ], [ {
            "smbID" : 1
          }, {
            "smbID" : 6
          }, {
            "smbID" : 1
          }, {
            "smbID" : 6
          }, {
            "smbID" : 8
          }, {
            "smbID" : 9
          } ], [ {
            "smbID" : 3
          }, {
            "smbID" : 6
          }, {
            "smbID" : 2
          }, {
            "smbID" : 2
          } ], [ {
            "smbID" : 1
          }, {
            "smbID" : 9
          }, {
            "smbID" : 1
          }, {
            "smbID" : 2
          }, {
            "smbID" : 12
          } ], [ {
            "smbID" : 5
          }, {
            "smbID" : 6
          } ] ]
        },
        "horizontalReel" : [ [ {
          "smbID" : 8,
          "size" : 4
        }, {
          "smbID" : 5,
          "size" : 4
        }, {
          "smbID" : 0,
          "size" : 4
        }, {
          "smbID" : 0,
          "size" : 4
        } ] ],
        "state" : {
          "reelSet" : "baseGameReels2",
          "status" : "NORMAL",
          "tumble" : false,
          "wonAdditionalSpins" : 0,
          "wonAdditionalMult" : 0,
          "freespinsRemaining" : 0,
          "totalWin" : 18,
          "featureLevel" : -1,
          "explode" : false,
          "numTumbles" : 0,
          "reelHeights" : [ 2, 3, 6, 4, 5, 2 ],
          "mult" : 1
        }
      }
    }
    ],
    "win5":[
    {
      "response" : {
        "bet" : {
          "stake" : 1.0,
          "stakePerLine" : 0.1,
          "balance" : null,
          "addBalance" : 0.0,
          "lines" : 10,
          "settle" : false,
          "buyIn" : false
        },
        "results" : {
          "win" : {
            "total" : 0,
            "symbolWin" : {
              "coins" : 0,
              "symbols" : [ ]
            },
            "scatterWin" : {
              "coins" : 0,
              "scatters" : [ {
                "smbID" : 12,
                "amt" : 0,
                "num" : 3,
                "bonusWon" : "FREESPINS",
                "bonusWonValue" : 8
              } ]
            }
          },
          "reels" : [ [ {
            "smbID" : 6
          }, {
            "smbID" : 5
          }, {
            "smbID" : 0
          }, {
            "smbID" : 12,
            "animate" : true
          } ], [ {
            "smbID" : 2
          }, {
            "smbID" : 2
          }, {
            "smbID" : 12,
            "animate" : true
          } ], [ {
            "smbID" : 1
          }, {
            "smbID" : 1
          }, {
            "smbID" : 8
          }, {
            "smbID" : 12,
            "animate" : true
          } ], [ {
            "smbID" : 1
          }, {
            "smbID" : 12,
            "animate" : true
          }, {
            "smbID" : 0
          }, {
            "smbID" : 0
          }, {
            "smbID" : 0
          }, {
            "smbID" : 4
          }, {
            "smbID" : 5
          } ], [ {
            "smbID" : 8
          }, {
            "smbID" : 12,
            "animate" : true
          } ], [ {
            "smbID" : 2
          }, {
            "smbID" : 4
          }, {
            "smbID" : 0
          }, {
            "smbID" : 12,
            "animate" : true
          }, {
            "smbID" : 1
          } ] ]
        },
        "horizontalReel" : [ [ {
          "smbID" : 8,
          "size" : 4
        }, {
          "smbID" : 6,
          "size" : 4
        }, {
          "smbID" : 5,
          "size" : 4
        }, {
          "smbID" : 4,
          "size" : 4
        } ] ],
        "state" : {
          "reelSet" : "FreespinsReels",
          "status" : "FREESPINS_TRIGGER",
          "tumble" : false,
          "wonAdditionalSpins" : 0,
          "wonAdditionalMult" : 0,
          "freespinsRemaining" : 8,
          "totalWin" : 0,
          "featureLevel" : 0,
          "explode" : false,
          "numTumbles" : 0,
          "reelHeights" : [ 3, 2, 3, 7, 2, 5 ],
          "mult" : 1,
          "anticipate" : [ 2, 3, 4, 5 ]
        }
      }
    }]
}