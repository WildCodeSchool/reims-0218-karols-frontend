import { getCountPreparationWithMax } from "."

describe("getCountPreparationWithMax", () => {
  it("should return count with max gender", () => {
    const prevState = [
      {
        _id: "5b4705a54a66fc2064efbb23",
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
        _id: "5b4705a54a66fc2064efbb24",
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
        _id: "5b4705a54a66fc2064efbb25",
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
        _id: "5b4705a54a66fc2064efbb26",
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
        _id: "5b4705a54a66fc2064efbb27",
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
        _id: "5b4705a54a66fc2064efbb28",
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
    ]

    const expected = [
      {
        _id: "5b4705a54a66fc2064efbb23",
        id: 1,
        name: "Maquillage",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 2,
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
        _id: "5b4705a54a66fc2064efbb24",
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
        _id: "5b4705a54a66fc2064efbb25",
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
        _id: "5b4705a54a66fc2064efbb26",
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
        _id: "5b4705a54a66fc2064efbb27",
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
        _id: "5b4705a54a66fc2064efbb28",
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
    ]

    expect(getCountPreparationWithMax(1, prevState)).toEqual(expected)
  })
})
