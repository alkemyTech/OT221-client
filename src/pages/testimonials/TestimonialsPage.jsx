import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ErrorSign from "../../components/ErrorSign"
import { Loader } from "../../components/Loader"
import Paginator from "../../components/Paginator"
import TestimonialCard from "../../components/TestimonialCard"
import { getPublic } from "../../services/apiServices"


const TestimonialsPage = () =>{

    const [pageCount, setPageCount] =  useState(null)
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(false)
    
   const { page } = useParams()
   const limit = 15
  const cardsPerRow = 5
 
     
    useEffect(()=>{
        getPublic(`/testimonials/${limit}/${page}`)
            .then(({data})=>{
                let array = data.testimonials
                let rows = []
                while(array.length) rows.push(array.splice(0,cardsPerRow));
              setData(rows); 
              setPageCount(data.pageCount)})
            .catch(err => setError(err))
            .finally(setLoading(false)) 

    },[page])


    if (loading) {
        return <main className=" container d-flex flex-column justify-content-center align-items-center gap-3 my-5" style={{height:'fit-content',width:'100%'}}>
            <Loader></Loader>
        </main>
    }

    return (
   data ? <main className=" container d-flex flex-column justify-content-center align-items-center gap-3 my-5" style={{height:'fit-content',width:'100%'}}>
        <h1 className="text-center mt-5 mb-2">Testimonios</h1>
        {data.map((row,index) => <div key={`row${index}`} className="w-100 h-auto  d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">{row.map( testimonial => <TestimonialCard key={`testimonial${testimonial.id}`} {...testimonial}/>)}</div>)}
        <Paginator currentPage={page} pageCount ={pageCount}></Paginator>
        <button className="btn btn-primary align-self-center align-self-md-start mt-5 px-5 py-2 fs-1 shadow text-white" style={{borderRadius:'1.5rem'}}>Agregar mi testimonio</button>
        <button className="btn btn-white align-self-center align-self-md-start my-2 px-5 py-2 fs-1 shadow border border-dark" style={{borderRadius:'1.5rem'}}>Ir al inicio</button>
    </main>
    : error && <ErrorSign error={error}></ErrorSign>
    )
}

export default TestimonialsPage