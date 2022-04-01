import '../../index.css'

export default function Banner({ theme, isVideoLeft, video, title }: any) {
	return (
    <div className={ 'banner bg-gradient ' + theme }>
      <div className='mx-0 row'>
        <div className={ isVideoLeft ? '' : 'col-md-6' }></div>
        <div className='col-md-6 col-sm-12'><video autoPlay className='w-100' loop muted playsInline src={ video } /></div>
        <div className={ isVideoLeft ? 'col-md-6' : '' }></div>
      </div>
      <div className='mx-0 position-absolute row w-100'>
        <div className={ isVideoLeft ? 'col-md-6' : '' }></div>
        <div className='col-md-6 col-sm-12'><h1 className='banner-title'>{ title }</h1></div>
        <div className={ isVideoLeft ? '' : 'col-md-6' }></div>
      </div>
    </div>
	)
}
