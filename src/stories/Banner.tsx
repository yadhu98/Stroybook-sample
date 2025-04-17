
export interface BannerType  {
    info : 'primary' | 'danger',
    children : string
}
export const Banner = ({info = 'primary',children} : BannerType)  => {
    const styles ={
        backgroundColor : info === 'primary' ? 'blue' : info === 'danger' ? 'red' : 'white',
        color : info === 'primary' ? 'pink' : info === 'danger' ? 'blue' : 'black'
    }
  return (
    <div style={styles}>
        {children}
    </div>
  )
}
