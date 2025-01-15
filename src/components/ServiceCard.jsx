import { Card } from "primereact/card";

export default function ServiceCard({icon,title,description}) {
  return (
    <Card title={(
      <div className="text-900 text-xl mb-3 font-medium text-center">{title}</div>
    )}>
      <div className="text-center">
        <span className="p-3 shadow-2 mb-3 inline-block surface-50" style={{ borderRadius: '10px' }}>
          <i className={`${icon} text-6xl text-primary`}></i>
        </span>
        <div className="line-height-3">{description}</div>
      </div>
    </Card>
  )
}