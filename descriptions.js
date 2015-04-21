var DESC_SHOW_HIDE_ANI_DURATION = 2000,
	
descs = {
	slide1: {
		howManyDescs : 2,
		delays : [200, 400],
		desc1: {
			toShow : {
				CSS : {right : '20'},
				aniDuration : 2000,
				easings : {right: 'easeOutCubic'},
			},
			toHide : {
				CSS : { top : '500' },
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
				resetCSS : {
					padding: '5px',
					top:'10%',
					right:'120%'
				}
			}
		},
		desc2 : {
			toShow : {
				CSS : {top: '200'},
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
			},
			toHide : {
				CSS : { right : '800' },
				aniDuration : 2000,
				easings : {right: 'easeOutCubic'},
				resetCSS : {
					width: '50%',
					opacity: '1',
					top: '-99%',
					right: '20px',
					padding: '5px'
				}
			}
		}
	},
	slide2: {
		howManyDescs : 2,
		delays : [200, 400],
		desc1: {
			toShow : {
				CSS : {left : '20'},
				aniDuration : 2000,
				easings : {left: 'easeInOutBounce'},
			},
			toHide : {
				CSS : { top : '500' },
				aniDuration : 2000,
				easings : {top: 'easeInBounce'},
				resetCSS : {
					padding: '5px',
					top:'10%',
					right:'120%'
				}
			}
		},
		desc2 : {
			toShow : {
				CSS : {top: '200'},
				aniDuration : 2000,
				easings : {top: 'easeOutBounce'},
			},
			toHide : {
				CSS : { right : '800' },
				aniDuration : 2000,
				easings : {right: 'easeOutBounce'},
				resetCSS : {
					width: '50%',
					opacity: '1',
					top: '-99%',
					right: '-99px',
					padding: '5px'
				}
			}
		}
		
	},
	slide3: {
		howManyDescs : 2,
		delays : [200, 400],
		desc1: {
			toShow : {
				CSS : {right : '20'},
				aniDuration : 2000,
				easings : {right: 'easeOutCubic'},
			},
			toHide : {
				CSS : { top : '500' },
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
				resetCSS : {
					padding: '5px',
					top:'10%',
					right:'120%'
				}
			}
		},
		desc2 : {
			toShow : {
				CSS : {top: '200'},
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
			},
			toHide : {
				CSS : { right : '800' },
				aniDuration : 2000,
				easings : {right: 'easeOutCubic'},
				resetCSS : {
					width: '50%',
					opacity: '1',
					top: '-99%',
					right: '20px',
					padding: '5px'
				}
			}
		}
		
	},
	slide4: {
		howManyDescs : 2,
		delays : [200, 400],
		desc1: {
			toShow : {
				CSS : {right : '20'},
				aniDuration : 2000,
				easings : {right: 'easeOutCubic'},
			},
			toHide : {
				CSS : { top : '500' },
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
				resetCSS : {
					padding: '5px',
					top:'10%',
					right:'120%'
				}
			}
		},
		desc2 : {
			toShow : {
				CSS : {top: '200'},
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
			},
			toHide : {
				CSS : { right : '800' },
				aniDuration : 2000,
				easings : {right: 'easeOutCubic'},
				resetCSS : {
					width: '50%',
					opacity: '1',
					top: '-99%',
					right: '20px',
					padding: '5px'
				}
			}
		}
	},
	slide5: {
		howManyDescs : 2,
		delays : [200, 400],
		desc1: {
			toShow : {
				CSS : {right : '20'},
				aniDuration : 2000,
				easings : {right: 'easeOutCubic'},
			},
			toHide : {
				CSS : { top : '500' },
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
				resetCSS : {
					padding: '5px',
					top:'10%',
					right:'120%'
				}
			}
		},
		desc2 : {
			toShow : {
				CSS : {top: '200'},
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
			},
			toHide : {
				CSS : { right : '800' },
				aniDuration : 2000,
				easings : {right: 'easeOutCubic'},
				resetCSS : {
					width: '50%',
					opacity: '1',
					top: '-99%',
					right: '20px',
					padding: '5px'
				}
			}
		}
	},
	slide6: {
		howManyDescs : 2,
		delays : [200, 400],
		desc1: {
			toShow : {
				CSS : {right : '20'},
				aniDuration : 2000,
				easings : {right: 'easeOutCubic'},
			},
			toHide : {
				CSS : { top : '500' },
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
				resetCSS : {
					padding: '5px',
					top:'10%',
					right:'120%'
				}
			}
		},
		desc2 : {
			toShow : {
				CSS : {top: '200'},
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
			},
			toHide : {
				CSS : { top : '200' },
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
				resetCSS : {
					width: '50%',
					opacity: '1',
					top: '-99%',
					right: '20px',
					padding: '5px'
				}
			}
		}
	},
	slide7: {
		howManyDescs : 2,
		delays : [200, 400],
		desc1: {
			toShow : {
				CSS : {right : '20'},
				aniDuration : 2000,
				easings : {right: 'easeOutCubic'},
			},
			toHide : {
				CSS : { top : '500' },
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
				resetCSS : {
					padding: '5px',
					top:'10%',
					right:'120%'
				}
			}
		},
		desc2 : {
			toShow : {
				CSS : {top: '200'},
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
			},
			toHide : {
				CSS : { right : '800' },
				aniDuration : 2000,
				easings : {right: 'easeOutCubic'},
				resetCSS : {
					width: '50%',
					opacity: '1',
					top: '-99%',
					right: '20px',
					padding: '5px'
				}
			}
		}
	},
	slide8: {
		howManyDescs : 2,
		delays : [200, 400],
		desc1: {
			toShow : {
				CSS : {right : '20'},
				aniDuration : 2000,
				easings : {right: 'easeOutCubic'},
			},
			toHide : {
				CSS : { top : '500' },
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
				resetCSS : {
					padding: '5px',
					top:'10%',
					right:'120%'
				}
			}
		},
		desc2 : {
			toShow : {
				CSS : {top: '200'},
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
			},
			toHide : {
				CSS : { right : '800' },
				aniDuration : 2000,
				easings : {right: 'easeOutCubic'},
				resetCSS : {
					width: '50%',
					opacity: '1',
					top: '-99%',
					right: '20px',
					padding: '5px'
				}
			}
		}
	},
	slide9: {
		howManyDescs : 2,
		delays : [200, 400],
		desc1: {
			toShow : {
				CSS : {right : '20'},
				aniDuration : 2000,
				easings : {right: 'easeOutCubic'},
			},
			toHide : {
				CSS : {top : '500'},
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
				resetCSS : {
					padding: '5px',
					top:'10%',
					right:'120%'
				}
			}
		},
		desc2 : {
			toShow : {
				CSS : {top: '200'},
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
			},
			toHide : {
				CSS : {right : '800'},
				aniDuration : 2000,
				easings : {right: 'easeOutCubic'},
				resetCSS : {
					width: '50%',
					opacity: '1',
					top: '-99%',
					right: '20px',
					padding: '5px'
				}
			}
		}
	},
	slide10: {
		howManyDescs : 2,
		delays : [200, 400],
		desc1: {
			toShow : {
				CSS : {right : '20'},
				aniDuration : 2000,
				easings : {right: 'easeOutCubic'},
			},
			toHide : {
				CSS : { top : '500' },
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
				resetCSS : {
					padding: '5px',
					top:'10%',
					right:'120%'
				}
			}
		},
		desc2 : {
			toShow : {
				CSS : {top: '200'},
				aniDuration : 2000,
				easings : {top: 'easeOutCubic'},
			},
			toHide : {
				CSS : { right : '800' },
				aniDuration : 2000,
				easings : {right: 'easeOutCubic'},
				resetCSS : {
					width: '50%',
					opacity: '1',
					top: '-99%',
					right: '20px',
					padding: '5px'
				}
			}
		}
	}
};