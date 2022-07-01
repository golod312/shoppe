import Baner from 'components/baner/Baner'
import Producs from 'components/producs/Producs'
import React from 'react'


function Homepage() {
          return (

                    <div className='main_container'>

                              <Baner />
                              <div>
                                        <h2>Shop The Latest</h2>
                              </div>
                              <Producs />



                    </div>

          )
}

export default Homepage