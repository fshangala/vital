import {Card} from 'primereact/card'

export default function Footer() {
  return (
    <Card>
      <div className="flex flex-row justify-content-center align-items-center gap-2">
        <img src="/images/logo.png" alt="logo" className="w-4rem h-4rem"/>
        <div className="text-primary text-xl font-bold">Vital Graphics and Consultancy</div>
      </div>
      <div className='flex justify-content-center text-primary'>
        &copy; Vital Graphics & Consultancy, 2025. Developed and maintained by, <a href='https://github.com/fshangala'>fshangala</a>
      </div>
    </Card>
  )
}