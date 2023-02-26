export default function Container({ variant = 'main', className, children }) {
    const maxW = variant === 'main' ? 'max-w-[83rem]' : 'max-w-[61rem]'
    return <div className={`mx-auto ${maxW} ` + className}>
        {children}
    </div>
}