import {
  getReservationData,
  getSelectedPreparations,
  getSelectedShop,
  getSelectedService,
  getSelectedGender,
  getSelectedTimeSlot,
  getCountTable
} from "."

describe("getReservationData", () => {
  it("should return an empty object if no data selected", () => {
    const noServiceSelectedState = {
      prestations: [
        {
          id: 1,
          name: "Maquillage",
          image: "",
          description: "",
          gender: "F",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation1.1.png",
              titlePreparation:
                "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)",
              duration: {
                minutes: 20
              },
              price: 550,
              choices: [
                {
                  id: 1,
                  title: "Uniforme et 'Effet bonne mine', sur tout le visage",
                  options: []
                },
                {
                  id: 2,
                  title: "Focus plus prononcé sur un élément de votre choix",
                  options: [
                    "Charbonneux",
                    "Graphique",
                    "Coloré",
                    "Spécial soirée",
                    "Glamour",
                    "Rétro (eyeliner ou bouche)"
                  ]
                }
              ]
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation1.2.png",
              titlePreparation: "Maquillage KAROLS",
              duration: {
                minutes: 30
              },
              price: 701,
              choices: [
                {
                  id: 1,
                  title:
                    "Maquillage très complet avec un focus plus important sur les yeux",
                  options: [
                    "Soirée",
                    "Coloré",
                    "Lumineux",
                    "Charbonneux",
                    "Glamour",
                    "Rétro",
                    "Coréen",
                    "Graphique (liners colorés variés)",
                    "Spécial shooting photo"
                  ]
                }
              ]
            },
            {
              id: 3,
              selected: false,
              count: 0,
              image:
                "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5aa1d44d3153feb30a3ac5dbf9bbccd3&auto=format&fit=crop&w=1051&q=80",
              titlePreparation: "Maquillage ultime",
              duration: {
                minutes: 45
              },
              price: 83,
              choices: [
                {
                  id: 1,
                  title:
                    "Maquillage avec un focus absolu sur tous les éléments",
                  options: [
                    "Mariage",
                    "Grands événements (galas, diplomations, jour de l'an)",
                    "Festivals",
                    "Halloween simple",
                    "Spécial shooting photo ou artistique",
                    "Instagram (pour sculpter au mieux les contours de ton beau visage)",
                    "Effet particulier (strobing, holographique etc)"
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: "Coiffure",
          image: "",
          description: "",
          gender: "F",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation2.1.png",
              titlePreparation: "Coiffure stylisée",
              duration: {
                minutes: 20
              },
              price: 2,
              choices: [
                {
                  id: 1,
                  title: "Coiffure personnalisable",
                  options: [
                    "Lissage",
                    "Brushing",
                    "Brushing volume(cheveux courts)",
                    "Coiffure working-girl (entretiens d'embauche etc)",
                    "Ondulations ou 'Wavy Hair' (cheveux courts)",
                    "Tresse plaquée d'un côté de la tête ",
                    "Tresse bohème (classique ou en épi de blé)",
                    "Tresse (classique ou africaine)",
                    "Chignon classique"
                  ]
                }
              ]
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation2.2.jpg",
              titlePreparation: "Coiffure stylisée élaborée",
              duration: {
                minutes: 30
              },
              price: 65,
              choices: [
                {
                  id: 1,
                  title: "Coiffure sur mesure",
                  options: [
                    "Coiffure à boucles et/ou tresses",
                    "Ondulations ou 'Wavy Hair' (cheveux longs)",
                    "Base tête nette et tresse en épi de blé",
                    "Couronne de tresses sur mesure",
                    "Volume extrême (cheveux longs)",
                    "Coiffures avec un effet bombé",
                    "Tresse africaines doubles",
                    "Tresse(s) oversize ou spéciale(s)",
                    "Chignons élaborés"
                  ]
                }
              ]
            },
            {
              id: 3,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation2.3.png",
              titlePreparation: "Coiffure stylisée très élaborée",
              duration: {
                minutes: 45
              },
              price: 23,
              choices: [
                {
                  id: 1,
                  title: "Coiffure premium de 45 minutes",
                  options: [
                    "Mariage",
                    "Coiffures à boucles très élaborées",
                    "Coiffures à tresses très élaborées",
                    "Grands événements (galas, festivals, diplomations, jour de l'an, etc).",
                    "Coiffures très stylisées (défilés, etc)",
                    "Chignons très stylisées (accompagnés de nouvelles boucles)",
                    "Demandes spéciales (shootings photos, tournages, théâtre, etc)",
                    ""
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 3,
          name: "Coupes",
          image: "",
          description: "",
          gender: "F",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation3.1.png",
              titlePreparation: "Coupe classique",
              duration: {
                minutes: 20
              },
              price: 16,
              choices: [
                {
                  id: 1,
                  title: "Coiffure personnalisable",
                  options: [
                    "Des coupes droites",
                    "Des coupes de pointes",
                    "Des dégradés simples"
                  ]
                }
              ]
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation3.2.png",
              titlePreparation: "Coupe très stylisée",
              duration: {
                minutes: 30
              },
              price: 24,
              choices: [
                {
                  id: 1,
                  title: "",
                  options: [
                    "Des coupes très dégradées",
                    "Des coupes spéciales changements de look (ex: carré plongeant sur cheveux longs"
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 4,
          name: "Vernis",
          image: "",
          description: "",
          gender: "F",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation7.jpg",
              titlePreparation: "Pose de vernis au choix",
              duration: {
                minutes: 10
              },
              price: 7.5,
              choices: [
                {
                  id: 1,
                  title: "Vernis",
                  options: []
                }
              ]
            }
          ]
        },
        {
          id: 5,
          name: "Coiffure",
          image: "",
          description: "",
          gender: "M",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation10.png",
              TitlePreparation: "Coupe 1",
              duration: {
                minutes: 20
              },
              price: 16
            }
          ]
        },
        {
          id: 6,
          name: "Barbe",
          image: "",
          description: "",
          gender: "M",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation11.png",
              info: "http://palf.free.fr/portrait/vocabulaire.htm",
              titlePreparation: "Barbe 1",
              duration: {
                minutes: 20
              },
              price: 16
            }
          ]
        }
      ],
      services: [
        {
          id: 1,
          name: "Préparation",
          image:
            "https://images.unsplash.com/photo-1500839941678-aae14dbfae9a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=30c52f27bd1788b4ebeeb0b3710b4f31&auto=format&fit=crop&w=1720&q=80",
          description: "Venez vous faire maquiller",
          selected: false
        },
        {
          id: 2,
          name: "Table",
          image:
            "https://images.unsplash.com/photo-1510101988417-6c14e1acaab8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5e14b7647b1494e24bb2f49d9e3861c&auto=format&fit=crop&w=1650&q=80",
          description: "Venez boire un coup",
          selected: false
        },
        {
          id: 3,
          name: "Table + préparation",
          image:
            "https://images.unsplash.com/photo-1512462629038-1ff3395c5e5d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55c6a74501d7cbe8155805b05fd151af&auto=format&fit=crop&w=1650&q=80",
          description: "Venez vous faire maquiller et prendre un petit coup",
          selected: false
        }
      ],
      shops: [
        {
          id: 1,
          city: "Paris",
          address: "75000",
          image:
            "https://images.unsplash.com/33/YOfYx7zhTvYBGYs6g83s_IMG_8643.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82fecbde67b1966b4ea8118f3bea896e&auto=format&fit=crop&w=967&q=80",
          selected: false
        },
        {
          id: 2,
          city: "Lyon",
          address: "69000",
          image:
            "https://images.unsplash.com/photo-1496277195689-21125faa0eeb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=789210ffc73d1822ce69059fcefcabf0&auto=format&fit=crop&w=1050&q=80",
          selected: false
        },
        {
          id: 3,
          city: "Cannes",
          address: "06150",
          image:
            "https://thumbs.dreamstime.com/z/ville-de-cannes-france-2627857.jpg",
          selected: false
        }
      ],
      genders: [
        {
          sex: "M",
          selected: false,
          count: 0,
          image:
            "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa32268d819cd488975b3d92e88ab1bc&auto=format&fit=crop&w=1650&q=80"
        },
        {
          sex: "F",
          selected: false,
          count: 0,
          image:
            "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f5bb4869d80176df6b68e5f160b1c76&auto=format&fit=crop&w=1834&q=80"
        }
      ],
      timeSlots: []
    }
    expect(getReservationData(noServiceSelectedState)).toEqual({})
  })
  it("should return reservation data when preparation is selected", () => {
    const getServiceSelectedState = {
      prestations: [
        {
          id: 1,
          name: "Maquillage",
          image: "",
          description: "",
          gender: "F",
          preparations: [
            {
              id: 1,
              selected: true,
              count: 0,
              image: "http://localhost:8000/images/preparation1.1.png",
              titlePreparation:
                "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)",
              duration: {
                minutes: 20
              },
              price: 550,
              choices: [
                {
                  id: 1,
                  title: "Uniforme et 'Effet bonne mine', sur tout le visage",
                  options: []
                },
                {
                  id: 2,
                  title: "Focus plus prononcé sur un élément de votre choix",
                  options: [
                    "Charbonneux",
                    "Graphique",
                    "Coloré",
                    "Spécial soirée",
                    "Glamour",
                    "Rétro (eyeliner ou bouche)"
                  ]
                }
              ]
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation1.2.png",
              titlePreparation: "Maquillage KAROLS",
              duration: {
                minutes: 30
              },
              price: 701,
              choices: [
                {
                  id: 1,
                  title:
                    "Maquillage très complet avec un focus plus important sur les yeux",
                  options: [
                    "Soirée",
                    "Coloré",
                    "Lumineux",
                    "Charbonneux",
                    "Glamour",
                    "Rétro",
                    "Coréen",
                    "Graphique (liners colorés variés)",
                    "Spécial shooting photo"
                  ]
                }
              ]
            },
            {
              id: 3,
              selected: false,
              count: 0,
              image:
                "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5aa1d44d3153feb30a3ac5dbf9bbccd3&auto=format&fit=crop&w=1051&q=80",
              titlePreparation: "Maquillage ultime",
              duration: {
                minutes: 45
              },
              price: 83,
              choices: [
                {
                  id: 1,
                  title:
                    "Maquillage avec un focus absolu sur tous les éléments",
                  options: [
                    "Mariage",
                    "Grands événements (galas, diplomations, jour de l'an)",
                    "Festivals",
                    "Halloween simple",
                    "Spécial shooting photo ou artistique",
                    "Instagram (pour sculpter au mieux les contours de ton beau visage)",
                    "Effet particulier (strobing, holographique etc)"
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: "Coiffure",
          image: "",
          description: "",
          gender: "F",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation2.1.png",
              titlePreparation: "Coiffure stylisée",
              duration: {
                minutes: 20
              },
              price: 2,
              choices: [
                {
                  id: 1,
                  title: "Coiffure personnalisable",
                  options: [
                    "Lissage",
                    "Brushing",
                    "Brushing volume(cheveux courts)",
                    "Coiffure working-girl (entretiens d'embauche etc)",
                    "Ondulations ou 'Wavy Hair' (cheveux courts)",
                    "Tresse plaquée d'un côté de la tête ",
                    "Tresse bohème (classique ou en épi de blé)",
                    "Tresse (classique ou africaine)",
                    "Chignon classique"
                  ]
                }
              ]
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation2.2.jpg",
              titlePreparation: "Coiffure stylisée élaborée",
              duration: {
                minutes: 30
              },
              price: 65,
              choices: [
                {
                  id: 1,
                  title: "Coiffure sur mesure",
                  options: [
                    "Coiffure à boucles et/ou tresses",
                    "Ondulations ou 'Wavy Hair' (cheveux longs)",
                    "Base tête nette et tresse en épi de blé",
                    "Couronne de tresses sur mesure",
                    "Volume extrême (cheveux longs)",
                    "Coiffures avec un effet bombé",
                    "Tresse africaines doubles",
                    "Tresse(s) oversize ou spéciale(s)",
                    "Chignons élaborés"
                  ]
                }
              ]
            },
            {
              id: 3,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation2.3.png",
              titlePreparation: "Coiffure stylisée très élaborée",
              duration: {
                minutes: 45
              },
              price: 23,
              choices: [
                {
                  id: 1,
                  title: "Coiffure premium de 45 minutes",
                  options: [
                    "Mariage",
                    "Coiffures à boucles très élaborées",
                    "Coiffures à tresses très élaborées",
                    "Grands événements (galas, festivals, diplomations, jour de l'an, etc).",
                    "Coiffures très stylisées (défilés, etc)",
                    "Chignons très stylisées (accompagnés de nouvelles boucles)",
                    "Demandes spéciales (shootings photos, tournages, théâtre, etc)",
                    ""
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 3,
          name: "Coupes",
          image: "",
          description: "",
          gender: "F",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation3.1.png",
              titlePreparation: "Coupe classique",
              duration: {
                minutes: 20
              },
              price: 16,
              choices: [
                {
                  id: 1,
                  title: "Coiffure personnalisable",
                  options: [
                    "Des coupes droites",
                    "Des coupes de pointes",
                    "Des dégradés simples"
                  ]
                }
              ]
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation3.2.png",
              titlePreparation: "Coupe très stylisée",
              duration: {
                minutes: 30
              },
              price: 24,
              choices: [
                {
                  id: 1,
                  title: "",
                  options: [
                    "Des coupes très dégradées",
                    "Des coupes spéciales changements de look (ex: carré plongeant sur cheveux longs"
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 4,
          name: "Vernis",
          image: "",
          description: "",
          gender: "F",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation7.jpg",
              titlePreparation: "Pose de vernis au choix",
              duration: {
                minutes: 10
              },
              price: 7.5,
              choices: [
                {
                  id: 1,
                  title: "Vernis",
                  options: []
                }
              ]
            }
          ]
        },
        {
          id: 5,
          name: "Coiffure",
          image: "",
          description: "",
          gender: "M",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation10.png",
              TitlePreparation: "Coupe 1",
              duration: {
                minutes: 20
              },
              price: 16
            }
          ]
        },
        {
          id: 6,
          name: "Barbe",
          image: "",
          description: "",
          gender: "M",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation11.png",
              info: "http://palf.free.fr/portrait/vocabulaire.htm",
              titlePreparation: "Barbe 1",
              duration: {
                minutes: 20
              },
              price: 16
            }
          ]
        }
      ],
      services: [
        {
          id: 1,
          name: "Préparation",
          image:
            "https://images.unsplash.com/photo-1500839941678-aae14dbfae9a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=30c52f27bd1788b4ebeeb0b3710b4f31&auto=format&fit=crop&w=1720&q=80",
          description: "Venez vous faire maquiller",
          selected: true
        },
        {
          id: 2,
          name: "Table",
          image:
            "https://images.unsplash.com/photo-1510101988417-6c14e1acaab8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5e14b7647b1494e24bb2f49d9e3861c&auto=format&fit=crop&w=1650&q=80",
          description: "Venez boire un coup",
          selected: false
        },
        {
          id: 3,
          name: "Table + préparation",
          image:
            "https://images.unsplash.com/photo-1512462629038-1ff3395c5e5d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55c6a74501d7cbe8155805b05fd151af&auto=format&fit=crop&w=1650&q=80",
          description: "Venez vous faire maquiller et prendre un petit coup",
          selected: false
        }
      ],
      shops: [
        {
          id: 1,
          city: "Paris",
          address: "75000",
          image:
            "https://images.unsplash.com/33/YOfYx7zhTvYBGYs6g83s_IMG_8643.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82fecbde67b1966b4ea8118f3bea896e&auto=format&fit=crop&w=967&q=80",
          selected: true
        },
        {
          id: 2,
          city: "Lyon",
          address: "69000",
          image:
            "https://images.unsplash.com/photo-1496277195689-21125faa0eeb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=789210ffc73d1822ce69059fcefcabf0&auto=format&fit=crop&w=1050&q=80",
          selected: false
        },
        {
          id: 3,
          city: "Cannes",
          address: "06150",
          image:
            "https://thumbs.dreamstime.com/z/ville-de-cannes-france-2627857.jpg",
          selected: false
        }
      ],
      genders: [
        {
          sex: "M",
          selected: false,
          count: 0,
          image:
            "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa32268d819cd488975b3d92e88ab1bc&auto=format&fit=crop&w=1650&q=80"
        },
        {
          sex: "F",
          selected: true,
          count: 0,
          image:
            "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f5bb4869d80176df6b68e5f160b1c76&auto=format&fit=crop&w=1834&q=80"
        }
      ],
      timeSlots: [
        {
          date: "2018-06-24T00:00:00.000+02:00",
          timeSlots: [
            {
              available: true,
              selected: true,
              time: {
                s: "2018-06-24T09:00:00.000+02:00",
                e: "2018-06-24T09:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T09:15:00.000+02:00",
                e: "2018-06-24T09:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T09:30:00.000+02:00",
                e: "2018-06-24T09:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T09:45:00.000+02:00",
                e: "2018-06-24T10:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T10:00:00.000+02:00",
                e: "2018-06-24T10:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T10:15:00.000+02:00",
                e: "2018-06-24T10:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T10:30:00.000+02:00",
                e: "2018-06-24T10:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T10:45:00.000+02:00",
                e: "2018-06-24T11:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T11:00:00.000+02:00",
                e: "2018-06-24T11:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T11:15:00.000+02:00",
                e: "2018-06-24T11:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T11:30:00.000+02:00",
                e: "2018-06-24T11:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T11:45:00.000+02:00",
                e: "2018-06-24T12:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T12:00:00.000+02:00",
                e: "2018-06-24T12:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T12:15:00.000+02:00",
                e: "2018-06-24T12:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T12:30:00.000+02:00",
                e: "2018-06-24T12:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T12:45:00.000+02:00",
                e: "2018-06-24T13:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T13:00:00.000+02:00",
                e: "2018-06-24T13:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T13:15:00.000+02:00",
                e: "2018-06-24T13:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T13:30:00.000+02:00",
                e: "2018-06-24T13:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T13:45:00.000+02:00",
                e: "2018-06-24T14:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T14:00:00.000+02:00",
                e: "2018-06-24T14:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T14:15:00.000+02:00",
                e: "2018-06-24T14:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T14:30:00.000+02:00",
                e: "2018-06-24T14:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T14:45:00.000+02:00",
                e: "2018-06-24T15:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T15:00:00.000+02:00",
                e: "2018-06-24T15:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T15:15:00.000+02:00",
                e: "2018-06-24T15:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T15:30:00.000+02:00",
                e: "2018-06-24T15:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T15:45:00.000+02:00",
                e: "2018-06-24T16:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T16:00:00.000+02:00",
                e: "2018-06-24T16:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T16:15:00.000+02:00",
                e: "2018-06-24T16:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T16:30:00.000+02:00",
                e: "2018-06-24T16:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T16:45:00.000+02:00",
                e: "2018-06-24T17:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T17:00:00.000+02:00",
                e: "2018-06-24T17:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T17:15:00.000+02:00",
                e: "2018-06-24T17:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T17:30:00.000+02:00",
                e: "2018-06-24T17:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-24T17:45:00.000+02:00",
                e: "2018-06-24T18:00:00.000+02:00",
                invalid: null
              }
            }
          ]
        },
        {
          date: "2018-06-25T00:00:00.000+02:00",
          timeSlots: [
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T09:00:00.000+02:00",
                e: "2018-06-25T09:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T09:15:00.000+02:00",
                e: "2018-06-25T09:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T09:30:00.000+02:00",
                e: "2018-06-25T09:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T09:45:00.000+02:00",
                e: "2018-06-25T10:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T10:00:00.000+02:00",
                e: "2018-06-25T10:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T10:15:00.000+02:00",
                e: "2018-06-25T10:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T10:30:00.000+02:00",
                e: "2018-06-25T10:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T10:45:00.000+02:00",
                e: "2018-06-25T11:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T11:00:00.000+02:00",
                e: "2018-06-25T11:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T11:15:00.000+02:00",
                e: "2018-06-25T11:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T11:30:00.000+02:00",
                e: "2018-06-25T11:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T11:45:00.000+02:00",
                e: "2018-06-25T12:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T12:00:00.000+02:00",
                e: "2018-06-25T12:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T12:15:00.000+02:00",
                e: "2018-06-25T12:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T12:30:00.000+02:00",
                e: "2018-06-25T12:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T12:45:00.000+02:00",
                e: "2018-06-25T13:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T13:00:00.000+02:00",
                e: "2018-06-25T13:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T13:15:00.000+02:00",
                e: "2018-06-25T13:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T13:30:00.000+02:00",
                e: "2018-06-25T13:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T13:45:00.000+02:00",
                e: "2018-06-25T14:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T14:00:00.000+02:00",
                e: "2018-06-25T14:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T14:15:00.000+02:00",
                e: "2018-06-25T14:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T14:30:00.000+02:00",
                e: "2018-06-25T14:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T14:45:00.000+02:00",
                e: "2018-06-25T15:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T15:00:00.000+02:00",
                e: "2018-06-25T15:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T15:15:00.000+02:00",
                e: "2018-06-25T15:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T15:30:00.000+02:00",
                e: "2018-06-25T15:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T15:45:00.000+02:00",
                e: "2018-06-25T16:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T16:00:00.000+02:00",
                e: "2018-06-25T16:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T16:15:00.000+02:00",
                e: "2018-06-25T16:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T16:30:00.000+02:00",
                e: "2018-06-25T16:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T16:45:00.000+02:00",
                e: "2018-06-25T17:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T17:00:00.000+02:00",
                e: "2018-06-25T17:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T17:15:00.000+02:00",
                e: "2018-06-25T17:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T17:30:00.000+02:00",
                e: "2018-06-25T17:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-25T17:45:00.000+02:00",
                e: "2018-06-25T18:00:00.000+02:00",
                invalid: null
              }
            }
          ]
        },
        {
          date: "2018-06-26T00:00:00.000+02:00",
          timeSlots: [
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T09:00:00.000+02:00",
                e: "2018-06-26T09:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T09:15:00.000+02:00",
                e: "2018-06-26T09:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T09:30:00.000+02:00",
                e: "2018-06-26T09:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T09:45:00.000+02:00",
                e: "2018-06-26T10:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T10:00:00.000+02:00",
                e: "2018-06-26T10:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T10:15:00.000+02:00",
                e: "2018-06-26T10:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T10:30:00.000+02:00",
                e: "2018-06-26T10:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T10:45:00.000+02:00",
                e: "2018-06-26T11:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T11:00:00.000+02:00",
                e: "2018-06-26T11:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T11:15:00.000+02:00",
                e: "2018-06-26T11:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T11:30:00.000+02:00",
                e: "2018-06-26T11:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T11:45:00.000+02:00",
                e: "2018-06-26T12:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T12:00:00.000+02:00",
                e: "2018-06-26T12:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T12:15:00.000+02:00",
                e: "2018-06-26T12:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T12:30:00.000+02:00",
                e: "2018-06-26T12:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T12:45:00.000+02:00",
                e: "2018-06-26T13:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T13:00:00.000+02:00",
                e: "2018-06-26T13:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T13:15:00.000+02:00",
                e: "2018-06-26T13:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T13:30:00.000+02:00",
                e: "2018-06-26T13:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T13:45:00.000+02:00",
                e: "2018-06-26T14:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T14:00:00.000+02:00",
                e: "2018-06-26T14:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T14:15:00.000+02:00",
                e: "2018-06-26T14:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T14:30:00.000+02:00",
                e: "2018-06-26T14:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T14:45:00.000+02:00",
                e: "2018-06-26T15:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T15:00:00.000+02:00",
                e: "2018-06-26T15:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T15:15:00.000+02:00",
                e: "2018-06-26T15:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T15:30:00.000+02:00",
                e: "2018-06-26T15:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T15:45:00.000+02:00",
                e: "2018-06-26T16:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T16:00:00.000+02:00",
                e: "2018-06-26T16:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T16:15:00.000+02:00",
                e: "2018-06-26T16:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T16:30:00.000+02:00",
                e: "2018-06-26T16:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T16:45:00.000+02:00",
                e: "2018-06-26T17:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T17:00:00.000+02:00",
                e: "2018-06-26T17:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T17:15:00.000+02:00",
                e: "2018-06-26T17:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T17:30:00.000+02:00",
                e: "2018-06-26T17:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-26T17:45:00.000+02:00",
                e: "2018-06-26T18:00:00.000+02:00",
                invalid: null
              }
            }
          ]
        },
        {
          date: "2018-06-27T00:00:00.000+02:00",
          timeSlots: [
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T09:00:00.000+02:00",
                e: "2018-06-27T09:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T09:15:00.000+02:00",
                e: "2018-06-27T09:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T09:30:00.000+02:00",
                e: "2018-06-27T09:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T09:45:00.000+02:00",
                e: "2018-06-27T10:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T10:00:00.000+02:00",
                e: "2018-06-27T10:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T10:15:00.000+02:00",
                e: "2018-06-27T10:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T10:30:00.000+02:00",
                e: "2018-06-27T10:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T10:45:00.000+02:00",
                e: "2018-06-27T11:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T11:00:00.000+02:00",
                e: "2018-06-27T11:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T11:15:00.000+02:00",
                e: "2018-06-27T11:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T11:30:00.000+02:00",
                e: "2018-06-27T11:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T11:45:00.000+02:00",
                e: "2018-06-27T12:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T12:00:00.000+02:00",
                e: "2018-06-27T12:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T12:15:00.000+02:00",
                e: "2018-06-27T12:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T12:30:00.000+02:00",
                e: "2018-06-27T12:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T12:45:00.000+02:00",
                e: "2018-06-27T13:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T13:00:00.000+02:00",
                e: "2018-06-27T13:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T13:15:00.000+02:00",
                e: "2018-06-27T13:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T13:30:00.000+02:00",
                e: "2018-06-27T13:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T13:45:00.000+02:00",
                e: "2018-06-27T14:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T14:00:00.000+02:00",
                e: "2018-06-27T14:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T14:15:00.000+02:00",
                e: "2018-06-27T14:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T14:30:00.000+02:00",
                e: "2018-06-27T14:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T14:45:00.000+02:00",
                e: "2018-06-27T15:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T15:00:00.000+02:00",
                e: "2018-06-27T15:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T15:15:00.000+02:00",
                e: "2018-06-27T15:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T15:30:00.000+02:00",
                e: "2018-06-27T15:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T15:45:00.000+02:00",
                e: "2018-06-27T16:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T16:00:00.000+02:00",
                e: "2018-06-27T16:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T16:15:00.000+02:00",
                e: "2018-06-27T16:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T16:30:00.000+02:00",
                e: "2018-06-27T16:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T16:45:00.000+02:00",
                e: "2018-06-27T17:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T17:00:00.000+02:00",
                e: "2018-06-27T17:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T17:15:00.000+02:00",
                e: "2018-06-27T17:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T17:30:00.000+02:00",
                e: "2018-06-27T17:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-27T17:45:00.000+02:00",
                e: "2018-06-27T18:00:00.000+02:00",
                invalid: null
              }
            }
          ]
        },
        {
          date: "2018-06-28T00:00:00.000+02:00",
          timeSlots: [
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T09:00:00.000+02:00",
                e: "2018-06-28T09:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T09:15:00.000+02:00",
                e: "2018-06-28T09:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T09:30:00.000+02:00",
                e: "2018-06-28T09:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T09:45:00.000+02:00",
                e: "2018-06-28T10:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T10:00:00.000+02:00",
                e: "2018-06-28T10:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T10:15:00.000+02:00",
                e: "2018-06-28T10:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T10:30:00.000+02:00",
                e: "2018-06-28T10:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T10:45:00.000+02:00",
                e: "2018-06-28T11:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T11:00:00.000+02:00",
                e: "2018-06-28T11:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T11:15:00.000+02:00",
                e: "2018-06-28T11:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T11:30:00.000+02:00",
                e: "2018-06-28T11:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T11:45:00.000+02:00",
                e: "2018-06-28T12:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T12:00:00.000+02:00",
                e: "2018-06-28T12:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T12:15:00.000+02:00",
                e: "2018-06-28T12:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T12:30:00.000+02:00",
                e: "2018-06-28T12:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T12:45:00.000+02:00",
                e: "2018-06-28T13:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T13:00:00.000+02:00",
                e: "2018-06-28T13:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T13:15:00.000+02:00",
                e: "2018-06-28T13:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T13:30:00.000+02:00",
                e: "2018-06-28T13:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T13:45:00.000+02:00",
                e: "2018-06-28T14:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T14:00:00.000+02:00",
                e: "2018-06-28T14:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T14:15:00.000+02:00",
                e: "2018-06-28T14:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T14:30:00.000+02:00",
                e: "2018-06-28T14:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T14:45:00.000+02:00",
                e: "2018-06-28T15:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T15:00:00.000+02:00",
                e: "2018-06-28T15:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T15:15:00.000+02:00",
                e: "2018-06-28T15:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T15:30:00.000+02:00",
                e: "2018-06-28T15:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T15:45:00.000+02:00",
                e: "2018-06-28T16:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T16:00:00.000+02:00",
                e: "2018-06-28T16:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T16:15:00.000+02:00",
                e: "2018-06-28T16:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T16:30:00.000+02:00",
                e: "2018-06-28T16:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T16:45:00.000+02:00",
                e: "2018-06-28T17:00:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T17:00:00.000+02:00",
                e: "2018-06-28T17:15:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T17:15:00.000+02:00",
                e: "2018-06-28T17:30:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T17:30:00.000+02:00",
                e: "2018-06-28T17:45:00.000+02:00",
                invalid: null
              }
            },
            {
              available: true,
              selected: false,
              time: {
                s: "2018-06-28T17:45:00.000+02:00",
                e: "2018-06-28T18:00:00.000+02:00",
                invalid: null
              }
            }
          ]
        }
      ]
    }
    const expected = {
      shop: getSelectedShop(getServiceSelectedState),
      service: getSelectedService(getServiceSelectedState),
      gender: getSelectedGender(getServiceSelectedState),
      preparations: getSelectedPreparations(getServiceSelectedState),
      timeSlot: getSelectedTimeSlot(getServiceSelectedState)
    }

    expect(getReservationData(getServiceSelectedState)).toEqual(expected)
  })
  it("should return reservation data when table is selected", () => {
    const tableSelectedState = {
      prestations: [
        {
          id: 1,
          name: "Maquillage",
          image: "",
          description: "",
          gender: "F",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation1.1.png",
              info:
                "https://www.mille-et-une-bieres.fr/les-boutiques/boutique-de-reims/",
              titlePreparation:
                "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)"
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image: "http://mille-et-une-bieres-champigny.business.site/",
              info:
                "https://www.1jour1vin.com/fr/vin-champagne?s=GOOGLE-RWD&o=295&p=2&v=wmPr87&gclid=CjwKCAjw68zZBRAnEiwACw0eYRL1riv_mm8L8uRt-zi9RK1rolzk73MRDXJo2mfMnEFP2taCbpUTQRoCMAEQAvD_BwE",
              titlePreparation: "Maquillage KAROLS"
            },
            {
              id: 3,
              selected: false,
              count: 0,
              image:
                "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5aa1d44d3153feb30a3ac5dbf9bbccd3&auto=format&fit=crop&w=1051&q=80",
              titlePreparation: "Maquillage ultime",
              info: "https://your-cbd-store.jimdofree.com/"
            }
          ]
        },
        {
          id: 2,
          name: "Coiffure",
          image: "",
          description: "",
          gender: "F",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation2.1.png",
              info:
                "https://www.vinatis.com/spiritueux-vodka#p1&n15&t7&f[]73[]190577:f[]27[]11427[]s",
              titlePreparation: "Coiffure stylisée"
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation2.2.jpg",
              info:
                "https://www.wildness.fr/lancer-de-haches/?gclid=CjwKCAjw68zZBRAnEiwACw0eYajjlmS25u_as-TS4g-mMReBSk90FEYk2CVuzZpN3DtwNGx0Yy3RbhoCZ8sQAvD_BwE",
              titlePreparation: "Coiffure stylisée élaborée"
            },
            {
              id: 3,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation2.3.png",
              titlePreparation: "Coiffure stylisée très élaborée"
            }
          ]
        },
        {
          id: 3,
          name: "Coupes",
          image: "",
          description: "",
          gender: "F",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation3.1.png",
              titlePreparation: "Coupe classique",
              duration: {
                minutes: 20
              },
              price: 16
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation3.2.png",
              titlePreparation: "Coupe très stylisée",
              duration: {
                minutes: 30
              },
              price: 24
            }
          ]
        },
        {
          id: 4,
          name: "Vernis",
          image: "",
          description: "",
          gender: "F",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation7.jpg",
              titlePreparation: "Pose de vernis au choix",
              duration: {
                minutes: 10
              },
              price: 7.5
            }
          ]
        },
        {
          id: 5,
          name: "Coiffure",
          image: "",
          description: "",
          gender: "M",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation10.png",
              titlePreparation: "Coupe 1",
              duration: {
                minutes: 20
              },
              price: 16
            }
          ]
        },
        {
          id: 6,
          name: "Barbe",
          image: "",
          description: "",
          gender: "M",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation11.png",
              info: "http://palf.free.fr/portrait/vocabulaire.htm",
              titlePreparation: "Barbe 1",
              duration: {
                minutes: 20
              },
              price: 16
            }
          ]
        }
      ],
      services: [
        {
          id: 1,
          name: "Préparation",
          image:
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e93589105d9189784b921b9b22be9826&auto=format&fit=crop&w=675&q=80",
          description: "Venez vous faire maquiller",
          selected: false
        },
        {
          id: 2,
          name: "Table",
          image:
            "https://images.unsplash.com/photo-1511914678378-2906b1f69dcf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c0b02af4a4d6b94d894d454ef2d3e53&auto=format&fit=crop&w=634&q=80",
          description: "Venez boire un coup",
          selected: true
        },
        {
          id: 3,
          name: "Table + préparation",
          image:
            "https://images.unsplash.com/photo-1522936643032-5f3cde4cad06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a95c6a3a64dcf92424155361476dfc4&auto=format&fit=crop&w=1536&q=80",
          description: "Venez vous faire maquiller et prendre un petit coup",
          selected: false
        }
      ],
      shops: [
        {
          id: 1,
          city: "Paris",
          address: "75000",
          phone: "0123456789",
          image:
            "https://images.unsplash.com/photo-1438955138287-0c090d2290d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6df7d8e3bf9a1b0952511d2c99000c62&auto=format&fit=crop&w=634&q=80",
          selected: false
        },
        {
          id: 2,
          city: "Lyon",
          address: "69000",
          phone: "0223456789",
          image:
            "http://www.renderstorm.fr/wp-content/uploads/Renderstorm-Perspectiviste-Perspective-Gare-Bagneux-Ligne-15.jpg",
          selected: true
        },
        {
          id: 3,
          city: "Cannes",
          address: "06150",
          phone: "0423456789",
          image:
            "https://images.unsplash.com/photo-1499076218749-7d639231170d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=406aca1462040924190328fcf1ea0373&auto=format&fit=crop&w=1611&q=80",
          selected: false
        }
      ],
      genders: [
        {
          sex: "M",
          selected: false,
          count: 0,
          image:
            "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa32268d819cd488975b3d92e88ab1bc&auto=format&fit=crop&w=1650&q=80"
        },
        {
          sex: "F",
          selected: false,
          count: 0,
          image:
            "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f5bb4869d80176df6b68e5f160b1c76&auto=format&fit=crop&w=1834&q=80"
        }
      ],
      reservation: {
        success: false
      },
      timeSlots: [],
      form: {},
      countPeopleTable: {
        count: 2,
        image: "http://bar-legacy.com/img/main_6.jpg"
      }
    }
    const expected = {
      shop: getSelectedShop(tableSelectedState),
      service: getSelectedService(tableSelectedState),
      countTable: getCountTable(tableSelectedState),
      timeSlot: getSelectedTimeSlot(tableSelectedState)
    }
    expect(getReservationData(tableSelectedState)).toEqual(expected)
  })
})
