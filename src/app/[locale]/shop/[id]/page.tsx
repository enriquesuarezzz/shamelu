'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { InterText } from '@/components/atoms/inter_text'
import { getProductById } from '../../../../../lib/firestore'
import { Product } from '../../../../../types/products'
import { useCart } from '@/components/molecules/cart_context/cart_context'
import { Link } from '@/i18n/routing'
import Image from 'next/image'

export default function ProductDetails() {
  const pathname = usePathname()
  const locale = useLocale()
  const { addToCart } = useCart()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  useEffect(() => {
    async function fetchProduct() {
      const pathParts = pathname.split('/')
      const productId = pathParts[pathParts.length - 1]

      if (productId && locale) {
        const fetchedProduct = await getProductById(productId)
        if (!fetchedProduct) {
          setProduct(null) // Set product to null if not found
        } else {
          setProduct(fetchedProduct)
        }
      }
      setLoading(false)
    }

    fetchProduct()
  }, [pathname, locale])

  if (loading) return <p>Loading...</p>

  // Handle the product not found scenario
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center pt-32 text-center">
        <InterText fontSize="28px" className="text-gray-900">
          {locale === 'en'
            ? 'The product you are looking for does not exist'
            : 'El producto que buscas no existe'}
        </InterText>
        <Image
          src="/images/404.avif"
          alt="404"
          width={400}
          height={400}
          className="max-w-[250px] md:max-w-[400px]"
        />
        <Link
          href="/shop"
          className="mt-16 rounded bg-gray-800 px-6 py-2 text-white hover:bg-gray-900"
        >
          {locale === 'en' ? 'Go back to shop' : 'Volver a la tienda'}
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (product && product.stock > 0) {
      // Ensure quantity doesn't exceed stock
      const finalQuantity = Math.min(quantity, product.stock)

      if (finalQuantity > 0) {
        for (let i = 0; i < finalQuantity; i++) {
          addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
            stock: product.stock,
          })
        }

        // Set success toast message and show it
        setToastMessage(
          locale === 'en'
            ? 'Product Added to cart'
            : 'Producto añadido al carrito',
        )
        setShowToast(true)
      } else {
        // Set error toast message if stock is insufficient
        setToastMessage(
          locale === 'en'
            ? 'Not enough stock available'
            : 'No hay suficiente stock disponible',
        )
        setShowToast(true)
      }

      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false)
      }, 3000)
    } else {
      // Set error toast message if there's no stock
      setToastMessage(
        locale === 'en'
          ? 'Not enough stock available'
          : 'No hay suficiente stock disponible',
      )
      setShowToast(true)

      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false)
      }, 3000)
    }
  }
  const handleQuantityChange = (operation: 'increment' | 'decrement') => {
    if (operation === 'increment' && quantity < product.stock) {
      setQuantity((prev) => prev + 1)
    } else if (operation === 'decrement' && quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  return (
    <div className="flex w-full flex-col items-center justify-center pt-32">
      <div className="mx-10 flex max-w-[1400px] items-center justify-center gap-10 lg:gap-32">
        {/* Toast Notification */}
        {showToast && (
          <div className="fixed left-1/2 top-14 z-50 flex w-80 -translate-x-1/2 -translate-y-1/2 items-center rounded-lg bg-white p-4 shadow-lg transition-all duration-300 ease-in-out">
            <img
              src={product?.imageUrl}
              alt={product?.name}
              className="h-16 w-16 rounded-md object-contain"
            />
            <div className="ml-4 flex flex-col">
              <InterText fontSize="14px" className="text-gray-900">
                {toastMessage}
              </InterText>
              <InterText
                fontSize="14px"
                className="font-semibold text-gray-900"
              >
                {product?.name}
              </InterText>
            </div>
            <p className="ml-auto font-bold text-gray-900">{product?.price}€</p>
          </div>
        )}

        {/* Left Section - Product Name & Characteristics */}
        <div className="flex w-full flex-col gap-1 pt-0 md:w-1/3 md:pt-20">
          <InterText
            fontSize="12px"
            className={`w-fit rounded-full px-3 py-1 text-white ${
              product.category === 'red wine'
                ? 'bg-red-500'
                : product.category === 'white wine'
                  ? 'border bg-gray-300 text-black'
                  : product.category === 'sparkling wine'
                    ? 'bg-yellow-500'
                    : 'bg-gray-500'
            }`}
          >
            {product.category}
          </InterText>
          <InterText fontSize="28px" className="mt-2 font-bold">
            {product.name}
          </InterText>
        </div>

        {/* Center Section - Product Image */}
        <div className="flex w-full flex-col items-center lg:w-1/3">
          <div className="flex w-full items-center justify-center p-6 transition-all duration-300 ease-in-out hover:scale-110">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="max-h-[200px] rounded-md object-contain md:max-w-[250px] lg:max-h-[250px]"
            />
          </div>
          {/* technical sheet button */}
          <button
            type="submit"
            className="mx-2 mt-4 w-full rounded bg-gray-700 py-2 text-white hover:bg-gray-900"
            onClick={() => {
              if (product && product.id) {
                const pdfUrl = `https://brgtigvjaxugtmbaaadp.supabase.co/storage/v1/object/public/technicalsheets/${product.id}.pdf`
                window.open(pdfUrl, '_blank') // Open the technical sheet in a new tab
              }
            }}
          >
            <InterText fontSize="14px" className="text-white">
              {locale === 'es' ? 'Ficha técnica' : 'Technical sheet'}
            </InterText>
          </button>
        </div>

        {/* Right Section - Price & Quantity Selector */}
        <div className="hidden flex-col items-center gap-1 md:flex lg:w-1/3">
          {/* Stock Message */}
          <div className="mt-4 flex flex-col items-center gap-1">
            {product.stock > 0 ? (
              <div className="flex flex-col items-center gap-2">
                <span className="rounded-full bg-green-100 px-3 py-1 text-green-800">
                  {locale === 'en' ? 'In Stock: ' : 'En stock: '}{' '}
                  {product.stock}
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <span className="rounded-full bg-red-100 px-3 py-1 text-red-800">
                  {locale === 'en' ? 'Out of Stock' : 'Agotado'}
                </span>
                <InterText
                  fontSize="16px"
                  className="text-center font-semibold text-red-700"
                >
                  {locale === 'en'
                    ? 'Sorry, this product is currently unavailable.'
                    : 'Lo sentimos, este producto no está disponible actualmente.'}
                </InterText>
              </div>
            )}
          </div>
          {/* Quantity Selector */}
          <div className="col-span-4 flex flex-col items-center gap-1 md:gap-2">
            <InterText fontSize="16px" className="text-center">
              {locale === 'en' ? 'Select Quantity' : 'Selecciona una cantidad'}
            </InterText>
            <div className="flex items-center gap-2">
              <button
                className="rounded bg-gray-300 px-2 py-1 text-black hover:bg-gray-400"
                onClick={() => handleQuantityChange('decrement')}
              >
                -
              </button>
              <InterText fontSize="16px">{quantity}</InterText>
              <button
                className="rounded bg-gray-300 px-2 py-1 text-black hover:bg-gray-400"
                onClick={() => handleQuantityChange('increment')}
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>

            <InterText fontSize="20px" className="font-bold">
              {product.price}€
            </InterText>
          </div>
          <button
            onClick={handleAddToCart}
            className={`mt-4 w-full rounded-md bg-gray-800 px-4 py-2 ${
              product.stock > 0 && quantity <= product.stock
                ? 'hover:bg-gray-900'
                : 'cursor-not-allowed bg-gray-300 text-gray-500'
            }`}
            disabled={product.stock === 0 || quantity > product.stock}
          >
            <InterText fontSize="16px" className="text-white">
              {locale === 'en' ? 'Add to Cart' : 'Añadir al Carrito'}
            </InterText>
          </button>
        </div>
      </div>
      {/* Stock Message */}
      <div className="mt-4 flex flex-col items-center gap-1 md:hidden">
        {product.stock > 0 ? (
          <div className="flex flex-col items-center gap-2">
            <span className="rounded-full bg-green-100 px-3 py-1 text-green-800">
              {locale === 'en' ? 'In Stock' : 'En stock'}
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <span className="rounded-full bg-red-100 px-3 py-1 text-red-800">
              {locale === 'en' ? 'Out of Stock' : 'Agotado'}
            </span>
            <InterText
              fontSize="16px"
              className="text-center font-semibold text-red-700"
            >
              {locale === 'en'
                ? 'Sorry, this product is currently unavailable.'
                : 'Lo sentimos, este producto no está disponible actualmente.'}
            </InterText>
          </div>
        )}
      </div>
      {/* Quantity Selector for mobile */}
      <div className="flex flex-col items-center gap-1 pt-2 md:hidden md:pt-10 lg:w-1/3">
        <div className="col-span-4 flex flex-col items-center gap-1 md:gap-2">
          <InterText fontSize="16px" className="text-center">
            {locale === 'en' ? 'Select Quantity' : 'Selecciona una cantidad'}
          </InterText>
          <div className="flex items-center gap-2">
            <button
              className="rounded bg-gray-300 px-2 py-1 text-black hover:bg-gray-400"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <InterText fontSize="16px">{quantity}</InterText>
            <button
              className="rounded bg-gray-300 px-2 py-1 text-black hover:bg-gray-400"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <InterText fontSize="20px" className="font-bold">
            {product.price}€
          </InterText>
        </div>
        {/* Add to Cart Button */}
        <div className="flex flex-col items-center gap-1 md:flex lg:w-1/3">
          <button
            onClick={handleAddToCart}
            className={`mt-4 w-full rounded-md px-4 py-2 ${
              product.stock > 0
                ? 'bg-gray-800 text-white hover:bg-gray-900'
                : 'cursor-not-allowed bg-gray-300 text-gray-500'
            }`}
            disabled={product.stock === 0}
          >
            <InterText fontSize="16px" className="text-white">
              {locale === 'en' ? 'Add to Cart' : 'Añadir al Carrito'}
            </InterText>
          </button>
        </div>
      </div>
    </div>
  )
}
