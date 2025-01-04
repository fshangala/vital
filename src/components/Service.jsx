import { Card } from "primereact/card";

export default function Service({title}) {
  return (
    <Card start={(
      <img src="images/logo.png" alt={$title} />
    )} title={title}></Card>
  )
}