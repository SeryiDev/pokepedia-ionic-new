// Pokemon Interface, to add the data of the Pokemons
export interface Pokemon {
    id: number,
    name: string,
    abilityId: number[],
    type: string[],
    weakness: string[],
    height: number,
    weight: number,
    ps: number,
    attack: number,
    defense: number,
    specialAttack: number,
    specialDefense: number,
    speed: number,
    description: string,
    image?: string
}