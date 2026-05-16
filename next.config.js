/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statik export yerine standart build kullanarak 'next start' hatasını çözüyoruz
  // images: { unoptimized: true } kısmını koruyoruz çünkü hızlı resim yükleme için önemli
  images: { 
    unoptimized: true 
  },
  // Sitenin yavaşlığını engellemek için trailingSlash'ı optimize ettik
  trailingSlash: false, 
  // Gereksiz dist klasörü yönlendirmesini kaldırarak .next klasörünü varsayılan yapıyoruz
}

module.exports = nextConfig