import React from 'react'
import classes from "./Card1.module.css"
import SliderComponent from '../../UI/SliderComponent'

const DUMMY_CARDS = [
    {id: 1, title: "Card 1"},
    {id: 2, title: "Card 2"},
    {id: 3, title: "Card 3"},
    {id: 4, title: "Card 4"},
    {id: 5, title: "Card 5"},
    {id: 6, title: "Card 6"},
    {id: 7, title: "Card 7"},
    {id: 8, title: "Card 8"},
    {id: 9, title: "Card 9"},
    {id: 10, title: "Card 10"},
    {id: 11, title: "Card 11"},
    {id: 12, title: "Card 12"},
    {id: 13, title: "Card 13"},
    {id: 14, title: "Card 14"},
    {id: 15, title: "Card 15"},
    {id: 16, title: "Card 16"},
    {id: 17, title: "Card 17"},
    {id: 18, title: "Card 18"},
    {id: 19, title: "Card 19"},
    {id: 20, title: "Card 20"},
    {id: 21, title: "Card 21"},
    {id: 22, title: "Card 22"},
    {id: 23, title: "Card 23"},
    {id: 24, title: "Card 24"},
    {id: 25, title: "Card 25"},
    {id: 26, title: "Card 26"},
    {id: 27, title: "Card 27"},
    {id: 28, title: "Card 28"},
    {id: 29, title: "Card 29"},
    {id: 30, title: "Card 30"},
    {id: 31, title: "Card 31"},
    {id: 32, title: "Card 32"},
    {id: 33, title: "Card 33"},
    {id: 34, title: "Card 34"},
    {id: 35, title: "Card 35"},
    {id: 36, title: "Card 36"},
    {id: 37, title: "Card 37"},
    {id: 38, title: "Card 38"},
    {id: 39, title: "Card 39"},
    {id: 40, title: "Card 40"},
    {id: 41, title: "Card 41"},
    {id: 42, title: "Card 42"},
    {id: 43, title: "Card 43"},
    {id: 44, title: "Card 44"},
    {id: 45, title: "Card 45"},
    {id: 46, title: "Card 46"},
]

export default function Card1() {
  return (
    <section className={classes["whole-container"]}>
      <h1>
        Explore millions of offerings tailored to your business needs
      </h1>
      <div style={{padding: "0 5rem", margin: "3rem 0"}}>
      <SliderComponent cards={DUMMY_CARDS}/>
      </div>
    </section>
  )
}
