import React from 'react'
import { Link } from 'react-router-dom'

export interface Route {
  name: string
  url: string
}
interface Breadcrumb {
  routes: Route[]
  containerClass?: string
}
function Breadcrumbs({ routes, containerClass }: Breadcrumb) {
  return (
    <div className={`row ${containerClass ? containerClass : 'mx-10'}`}>
      <div className='col-sm-10 col px-0 align-items-center d-flex mt-10'>
        {routes && (
          <ul className='breadcrumb breadcrumb-transparent breadcrumb-lessthan font-weight-bold p-0 mb-0 font-size-sm'>
            {routes?.map((list: any, index: number) => {
              const isLast = index === routes.length - 1
              if (isLast) {
                return (
                  <li className='breadcrumb-item text-muted' key={index}>
                    {list.name}
                  </li>
                )
              }
              return (
                <li className='breadcrumb-item text-active' key={index}>
                  <Link to={list.url}>{list.name}</Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Breadcrumbs
