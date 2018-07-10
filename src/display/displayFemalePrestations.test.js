import { showFemalePrestation } from "."

describe("showFemalePrestations", () => {
  it("should return false if the female gender is not selected", () => {
    const noSelectedGenderFemaleState = {
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
              image: "http://localhost:8000/images/preparation10.png",
              titlePreparation: "Coupe 1",
              duration: {
                minutes: 20
              },
              price: 16,
              choices: [
                {
                  id: 1,
                  title: "Coupe et stylling",
                  options: []
                }
              ]
            },
            {
              id: 2,
              selected: false,
              titlePreparation: "Coupe 2",
              duration: {
                minutes: 20
              },
              price: 16,
              choices: [
                {
                  id: 1,
                  title: "Coupe et stylling",
                  options: []
                }
              ]
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
              image: "http://localhost:8000/images/preparation11.png",
              titlePreparation: "Barbe 1",
              duration: {
                minutes: 20
              },
              price: 16
            },
            {
              id: 2,
              selected: false,
              titlePreparation: "Barbe 2",
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
          image:
            "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa32268d819cd488975b3d92e88ab1bc&auto=format&fit=crop&w=1650&q=80"
        },
        {
          sex: "F",
          selected: false,
          image:
            "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f5bb4869d80176df6b68e5f160b1c76&auto=format&fit=crop&w=1834&q=80"
        }
      ],
      timeSlots: []
    }
    expect(showFemalePrestation(noSelectedGenderFemaleState)).toEqual(false)
  })

  it("should return true if the female gender selected", () => {
    const selectedGenderFemaleState = {
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
              image: "http://localhost:8000/images/preparation10.png",
              titlePreparation: "Coupe 1",
              duration: {
                minutes: 20
              },
              price: 16,
              choices: [
                {
                  id: 1,
                  title: "Coupe et stylling",
                  options: []
                }
              ]
            },
            {
              id: 2,
              selected: false,
              titlePreparation: "Coupe 2",
              duration: {
                minutes: 20
              },
              price: 16,
              choices: [
                {
                  id: 1,
                  title: "Coupe et stylling",
                  options: []
                }
              ]
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
              image: "http://localhost:8000/images/preparation11.png",
              titlePreparation: "Barbe 1",
              duration: {
                minutes: 20
              },
              price: 16
            },
            {
              id: 2,
              selected: false,
              titlePreparation: "Barbe 2",
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
          image:
            "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa32268d819cd488975b3d92e88ab1bc&auto=format&fit=crop&w=1650&q=80"
        },
        {
          sex: "F",
          selected: true,
          image:
            "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f5bb4869d80176df6b68e5f160b1c76&auto=format&fit=crop&w=1834&q=80"
        }
      ],
      timeSlots: []
    }
    expect(showFemalePrestation(selectedGenderFemaleState)).toEqual(true)
  })

  it("should return false if the female gender selected and service preparation is not selected", () => {
    const selectedGenderFemaleAndNotPreparationSelectionState = {
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
              selected: true,
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
              image: "http://localhost:8000/images/preparation10.png",
              titlePreparation: "Coupe 1",
              duration: {
                minutes: 20
              },
              price: 16,
              choices: [
                {
                  id: 1,
                  title: "Coupe et stylling",
                  options: []
                }
              ]
            },
            {
              id: 2,
              selected: false,
              titlePreparation: "Coupe 2",
              duration: {
                minutes: 20
              },
              price: 16,
              choices: [
                {
                  id: 1,
                  title: "Coupe et stylling",
                  options: []
                }
              ]
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
              image: "http://localhost:8000/images/preparation11.png",
              titlePreparation: "Barbe 1",
              duration: {
                minutes: 20
              },
              price: 16
            },
            {
              id: 2,
              selected: false,
              titlePreparation: "Barbe 2",
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
          selected: true
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
          selected: true
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
          image:
            "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa32268d819cd488975b3d92e88ab1bc&auto=format&fit=crop&w=1650&q=80"
        },
        {
          sex: "F",
          selected: true,
          image:
            "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f5bb4869d80176df6b68e5f160b1c76&auto=format&fit=crop&w=1834&q=80"
        }
      ],
      timeSlots: []
    }
    expect(
      showFemalePrestation(selectedGenderFemaleAndNotPreparationSelectionState)
    ).toEqual(false)
  })

  it("should return true if female count > 0 and preparation + table selected (id 3)", () => {
    const countSuperiorZeroAndPreparationAndTableSelected = {
      prestations: [
        {
          _id: "5b436878db10883d26c0decb",
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
              titlePreparation: "Maquillage focus",
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530864856-preparation1-1.png",
              info: "https://fr.wikipedia.org/wiki/Maquillage",
              type: "MAQ_FOCUS"
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865173-preparation1-2.png",
              info: "https://fr.wikipedia.org/wiki/Maquillage",
              titlePreparation: "Maquillage KAROLS",
              type: "MAQ_KAROLS"
            },
            {
              id: 3,
              selected: false,
              count: 0,
              image:
                "https://images.unsplash.com/photo-1495638671147-2cb03fe8e33e?ixlib=rb-0.3.5&s=949cb3800f55dd074ff07da771968e91&auto=format&fit=crop&w=1350&q=80",
              titlePreparation: "Maquillage ultime",
              info: "https://fr.wikipedia.org/wiki/Maquillage",
              type: "MAQ_ULTIME"
            }
          ]
        },
        {
          _id: "5b436878db10883d26c0decc",
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
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865220-preparation2-1.png",
              info: "https://fr.wikipedia.org/wiki/Coiffure",
              titlePreparation: "Coiffure stylisée",
              type: "COIF_STYL"
            },
            {
              id: 2,
              selected: false,
              count: 0,
              titlePreparation: "Coiffure élaborée",
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865251-preparation2-2.jpg",
              info: "https://fr.wikipedia.org/wiki/Coiffure",
              type: "COIF_STYL_2"
            },
            {
              id: 3,
              selected: false,
              count: 0,
              titlePreparation: "Coiffure très élaborée",
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865277-preparation2-3.png",
              info: "https://fr.wikipedia.org/wiki/Coiffure",
              type: "COIF_STYL_3"
            }
          ]
        },
        {
          _id: "5b436878db10883d26c0decd",
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
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865316-preparation3-1.png",
              titlePreparation: "Coupe classique",
              duration: {
                minutes: 20
              },
              price: 16,
              type: "COUPE_CLASS"
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865352-preparation3-2.png",
              titlePreparation: "Coupe très stylisée",
              duration: {
                minutes: 30
              },
              price: 24,
              type: "COUPE_STYL"
            }
          ]
        },
        {
          _id: "5b436878db10883d26c0dece",
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
              image:
                "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8441441eb6a6e5173f0e8b1c49da7a31&auto=format&fit=crop&w=2698&q=80",
              titlePreparation: "Pose de vernis au choix",
              duration: {
                minutes: 10
              },
              price: 7.5,
              type: "VERNIS"
            }
          ]
        },
        {
          _id: "5b436878db10883d26c0decf",
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
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865462-preparation10.png",
              titlePreparation: "Coupe 1",
              duration: {
                minutes: 20
              },
              price: 16,
              type: "COUPE_HOMME"
            }
          ]
        },
        {
          _id: "5b436878db10883d26c0ded0",
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
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865521-preparation11.png",
              info: "https://fr.wikipedia.org/wiki/Barbe",
              titlePreparation: "Barbe 1",
              duration: {
                minutes: 20
              },
              price: 16,
              type: "BARBE"
            }
          ]
        }
      ],
      services: [
        {
          _id: "5b436878db10883d26c0ded2",
          id: 1,
          name: "Préparation",
          image:
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e93589105d9189784b921b9b22be9826&auto=format&fit=crop&w=675&q=80",
          description: "Venez vous faire maquiller",
          selected: false
        },
        {
          _id: "5b436878db10883d26c0ded3",
          id: 2,
          name: "Table",
          image:
            "https://images.unsplash.com/photo-1511914678378-2906b1f69dcf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c0b02af4a4d6b94d894d454ef2d3e53&auto=format&fit=crop&w=634&q=80",
          description: "Venez boire un coup",
          selected: false
        },
        {
          _id: "5b436878db10883d26c0ded4",
          id: 3,
          name: "Table + préparation",
          image:
            "https://images.unsplash.com/photo-1522936643032-5f3cde4cad06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a95c6a3a64dcf92424155361476dfc4&auto=format&fit=crop&w=1536&q=80",
          description: "Venez vous faire maquiller et prendre un petit coup",
          selected: true
        }
      ],
      shops: [
        {
          _id: "5b436878db10883d26c0dec7",
          id: 1,
          city: "Paris",
          address: "75000",
          phone: "0123456789",
          image:
            "https://images.unsplash.com/photo-1438955138287-0c090d2290d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6df7d8e3bf9a1b0952511d2c99000c62&auto=format&fit=crop&w=634&q=80",
          selected: false
        },
        {
          _id: "5b436878db10883d26c0dec8",
          id: 2,
          city: "Lyon",
          address: "69000",
          phone: "0223456789",
          image:
            "http://www.renderstorm.fr/wp-content/uploads/Renderstorm-Perspectiviste-Perspective-Gare-Bagneux-Ligne-15.jpg",
          selected: true
        },
        {
          _id: "5b436878db10883d26c0dec9",
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
          _id: "5b436878db10883d26c0ded6",
          sex: "M",
          selected: false,
          count: 0,
          image:
            "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa32268d819cd488975b3d92e88ab1bc&auto=format&fit=crop&w=1650&q=80"
        },
        {
          _id: "5b436878db10883d26c0ded7",
          sex: "F",
          selected: true,
          count: 2,
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
        _id: "5b436879db10883d26c0ded9",
        count: 2,
        image: "http://bar-legacy.com/img/main_6.jpg"
      },
      logo: {
        _id: "5b436879db10883d26c0dedb",
        image:
          "https://image.noelshack.com/fichiers/2018/27/3/1530690032-logo-noirt.png"
      }
    }

    expect(
      showFemalePrestation(countSuperiorZeroAndPreparationAndTableSelected)
    ).toEqual(true)
  })

  it("should return false if female count > 0 and preparation selected (id 1) and male gender selected", () => {
    const countSuperiorZeroAndPreparationSelectedAndMaleGenderSelected = {
      prestations: [
        {
          _id: "5b436878db10883d26c0decb",
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
              titlePreparation: "Maquillage focus",
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530864856-preparation1-1.png",
              info: "https://fr.wikipedia.org/wiki/Maquillage",
              type: "MAQ_FOCUS"
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865173-preparation1-2.png",
              info: "https://fr.wikipedia.org/wiki/Maquillage",
              titlePreparation: "Maquillage KAROLS",
              type: "MAQ_KAROLS"
            },
            {
              id: 3,
              selected: false,
              count: 0,
              image:
                "https://images.unsplash.com/photo-1495638671147-2cb03fe8e33e?ixlib=rb-0.3.5&s=949cb3800f55dd074ff07da771968e91&auto=format&fit=crop&w=1350&q=80",
              titlePreparation: "Maquillage ultime",
              info: "https://fr.wikipedia.org/wiki/Maquillage",
              type: "MAQ_ULTIME"
            }
          ]
        },
        {
          _id: "5b436878db10883d26c0decc",
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
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865220-preparation2-1.png",
              info: "https://fr.wikipedia.org/wiki/Coiffure",
              titlePreparation: "Coiffure stylisée",
              type: "COIF_STYL"
            },
            {
              id: 2,
              selected: false,
              count: 0,
              titlePreparation: "Coiffure élaborée",
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865251-preparation2-2.jpg",
              info: "https://fr.wikipedia.org/wiki/Coiffure",
              type: "COIF_STYL_2"
            },
            {
              id: 3,
              selected: false,
              count: 0,
              titlePreparation: "Coiffure très élaborée",
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865277-preparation2-3.png",
              info: "https://fr.wikipedia.org/wiki/Coiffure",
              type: "COIF_STYL_3"
            }
          ]
        },
        {
          _id: "5b436878db10883d26c0decd",
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
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865316-preparation3-1.png",
              titlePreparation: "Coupe classique",
              duration: {
                minutes: 20
              },
              price: 16,
              type: "COUPE_CLASS"
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865352-preparation3-2.png",
              titlePreparation: "Coupe très stylisée",
              duration: {
                minutes: 30
              },
              price: 24,
              type: "COUPE_STYL"
            }
          ]
        },
        {
          _id: "5b436878db10883d26c0dece",
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
              image:
                "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8441441eb6a6e5173f0e8b1c49da7a31&auto=format&fit=crop&w=2698&q=80",
              titlePreparation: "Pose de vernis au choix",
              duration: {
                minutes: 10
              },
              price: 7.5,
              type: "VERNIS"
            }
          ]
        },
        {
          _id: "5b436878db10883d26c0decf",
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
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865462-preparation10.png",
              titlePreparation: "Coupe 1",
              duration: {
                minutes: 20
              },
              price: 16,
              type: "COUPE_HOMME"
            }
          ]
        },
        {
          _id: "5b436878db10883d26c0ded0",
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
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865521-preparation11.png",
              info: "https://fr.wikipedia.org/wiki/Barbe",
              titlePreparation: "Barbe 1",
              duration: {
                minutes: 20
              },
              price: 16,
              type: "BARBE"
            }
          ]
        }
      ],
      services: [
        {
          _id: "5b436878db10883d26c0ded2",
          id: 1,
          name: "Préparation",
          image:
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e93589105d9189784b921b9b22be9826&auto=format&fit=crop&w=675&q=80",
          description: "Venez vous faire maquiller",
          selected: true
        },
        {
          _id: "5b436878db10883d26c0ded3",
          id: 2,
          name: "Table",
          image:
            "https://images.unsplash.com/photo-1511914678378-2906b1f69dcf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c0b02af4a4d6b94d894d454ef2d3e53&auto=format&fit=crop&w=634&q=80",
          description: "Venez boire un coup",
          selected: false
        },
        {
          _id: "5b436878db10883d26c0ded4",
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
          _id: "5b436878db10883d26c0dec7",
          id: 1,
          city: "Paris",
          address: "75000",
          phone: "0123456789",
          image:
            "https://images.unsplash.com/photo-1438955138287-0c090d2290d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6df7d8e3bf9a1b0952511d2c99000c62&auto=format&fit=crop&w=634&q=80",
          selected: false
        },
        {
          _id: "5b436878db10883d26c0dec8",
          id: 2,
          city: "Lyon",
          address: "69000",
          phone: "0223456789",
          image:
            "http://www.renderstorm.fr/wp-content/uploads/Renderstorm-Perspectiviste-Perspective-Gare-Bagneux-Ligne-15.jpg",
          selected: true
        },
        {
          _id: "5b436878db10883d26c0dec9",
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
          _id: "5b436878db10883d26c0ded6",
          sex: "M",
          selected: true,
          count: 0,
          image:
            "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa32268d819cd488975b3d92e88ab1bc&auto=format&fit=crop&w=1650&q=80"
        },
        {
          _id: "5b436878db10883d26c0ded7",
          sex: "F",
          selected: false,
          count: 2,
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
        _id: "5b436879db10883d26c0ded9",
        count: 2,
        image: "http://bar-legacy.com/img/main_6.jpg"
      },
      logo: {
        _id: "5b436879db10883d26c0dedb",
        image:
          "https://image.noelshack.com/fichiers/2018/27/3/1530690032-logo-noirt.png"
      }
    }

    expect(
      showFemalePrestation(
        countSuperiorZeroAndPreparationSelectedAndMaleGenderSelected
      )
    ).toEqual(false)
  })

  it("should return false if no service selected selected", () => {
    const noServiceSelected = {
      prestations: [
        {
          _id: "5b436878db10883d26c0decb",
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
              titlePreparation: "Maquillage focus",
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530864856-preparation1-1.png",
              info: "https://fr.wikipedia.org/wiki/Maquillage",
              type: "MAQ_FOCUS"
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865173-preparation1-2.png",
              info: "https://fr.wikipedia.org/wiki/Maquillage",
              titlePreparation: "Maquillage KAROLS",
              type: "MAQ_KAROLS"
            },
            {
              id: 3,
              selected: false,
              count: 0,
              image:
                "https://images.unsplash.com/photo-1495638671147-2cb03fe8e33e?ixlib=rb-0.3.5&s=949cb3800f55dd074ff07da771968e91&auto=format&fit=crop&w=1350&q=80",
              titlePreparation: "Maquillage ultime",
              info: "https://fr.wikipedia.org/wiki/Maquillage",
              type: "MAQ_ULTIME"
            }
          ]
        },
        {
          _id: "5b436878db10883d26c0decc",
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
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865220-preparation2-1.png",
              info: "https://fr.wikipedia.org/wiki/Coiffure",
              titlePreparation: "Coiffure stylisée",
              type: "COIF_STYL"
            },
            {
              id: 2,
              selected: false,
              count: 0,
              titlePreparation: "Coiffure élaborée",
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865251-preparation2-2.jpg",
              info: "https://fr.wikipedia.org/wiki/Coiffure",
              type: "COIF_STYL_2"
            },
            {
              id: 3,
              selected: false,
              count: 0,
              titlePreparation: "Coiffure très élaborée",
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865277-preparation2-3.png",
              info: "https://fr.wikipedia.org/wiki/Coiffure",
              type: "COIF_STYL_3"
            }
          ]
        },
        {
          _id: "5b436878db10883d26c0decd",
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
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865316-preparation3-1.png",
              titlePreparation: "Coupe classique",
              duration: {
                minutes: 20
              },
              price: 16,
              type: "COUPE_CLASS"
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865352-preparation3-2.png",
              titlePreparation: "Coupe très stylisée",
              duration: {
                minutes: 30
              },
              price: 24,
              type: "COUPE_STYL"
            }
          ]
        },
        {
          _id: "5b436878db10883d26c0dece",
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
              image:
                "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8441441eb6a6e5173f0e8b1c49da7a31&auto=format&fit=crop&w=2698&q=80",
              titlePreparation: "Pose de vernis au choix",
              duration: {
                minutes: 10
              },
              price: 7.5,
              type: "VERNIS"
            }
          ]
        },
        {
          _id: "5b436878db10883d26c0decf",
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
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865462-preparation10.png",
              titlePreparation: "Coupe 1",
              duration: {
                minutes: 20
              },
              price: 16,
              type: "COUPE_HOMME"
            }
          ]
        },
        {
          _id: "5b436878db10883d26c0ded0",
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
              image:
                "https://image.noelshack.com/fichiers/2018/27/5/1530865521-preparation11.png",
              info: "https://fr.wikipedia.org/wiki/Barbe",
              titlePreparation: "Barbe 1",
              duration: {
                minutes: 20
              },
              price: 16,
              type: "BARBE"
            }
          ]
        }
      ],
      services: [
        {
          _id: "5b436878db10883d26c0ded2",
          id: 1,
          name: "Préparation",
          image:
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e93589105d9189784b921b9b22be9826&auto=format&fit=crop&w=675&q=80",
          description: "Venez vous faire maquiller",
          selected: false
        },
        {
          _id: "5b436878db10883d26c0ded3",
          id: 2,
          name: "Table",
          image:
            "https://images.unsplash.com/photo-1511914678378-2906b1f69dcf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c0b02af4a4d6b94d894d454ef2d3e53&auto=format&fit=crop&w=634&q=80",
          description: "Venez boire un coup",
          selected: false
        },
        {
          _id: "5b436878db10883d26c0ded4",
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
          _id: "5b436878db10883d26c0dec7",
          id: 1,
          city: "Paris",
          address: "75000",
          phone: "0123456789",
          image:
            "https://images.unsplash.com/photo-1438955138287-0c090d2290d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6df7d8e3bf9a1b0952511d2c99000c62&auto=format&fit=crop&w=634&q=80",
          selected: false
        },
        {
          _id: "5b436878db10883d26c0dec8",
          id: 2,
          city: "Lyon",
          address: "69000",
          phone: "0223456789",
          image:
            "http://www.renderstorm.fr/wp-content/uploads/Renderstorm-Perspectiviste-Perspective-Gare-Bagneux-Ligne-15.jpg",
          selected: true
        },
        {
          _id: "5b436878db10883d26c0dec9",
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
          _id: "5b436878db10883d26c0ded6",
          sex: "M",
          selected: false,
          count: 0,
          image:
            "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa32268d819cd488975b3d92e88ab1bc&auto=format&fit=crop&w=1650&q=80"
        },
        {
          _id: "5b436878db10883d26c0ded7",
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
        _id: "5b436879db10883d26c0ded9",
        count: 2,
        image: "http://bar-legacy.com/img/main_6.jpg"
      },
      logo: {
        _id: "5b436879db10883d26c0dedb",
        image:
          "https://image.noelshack.com/fichiers/2018/27/3/1530690032-logo-noirt.png"
      }
    }

    expect(showFemalePrestation(noServiceSelected)).toEqual(false)
  })
})
