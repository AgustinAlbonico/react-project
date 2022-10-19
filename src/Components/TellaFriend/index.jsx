import React from 'react'

export const TellaFriend = () => {
  return (
    <div className='tellafriend-container' class="w-auto bg-gray-200 h-48 flex flex-col justify-center text-center ">
    <div>
      <h3 class="mt-6 text-lg">Contale a un amigo</h3>
    </div>
    <div className='redes' class="flex justify-center m-5">
      <a href="https://www.instagram.com/" target="_blank"><img src="https://img.icons8.com/ios-glyphs/60/000000/instagram-new.png" class="m-5 hover:scale-125"/></a>
      <a href="https://www.facebook.com/" target="_blank"><img src="https://img.icons8.com/ios-glyphs/60/000000/facebook-new.png" class="m-5 hover:scale-125"/></a>
      <a href="https://www.messenger.com/" target="_blank"><img src="https://img.icons8.com/ios-glyphs/60/000000/facebook-messenger.png" class="m-5 hover:scale-125"/></a>
      <a href="https://twitter.com/?lang=es" target="_blank"><img src="https://img.icons8.com/ios-glyphs/60/000000/twitter-circled.png" class="m-5 hover:scale-125"/></a>
    </div>
  </div>
  )
}
