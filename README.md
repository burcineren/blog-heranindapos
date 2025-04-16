# Blog Heranindapos

Blog Heranindapos, kullanıcıların blog gönderilerini görüntüleyebileceği, oluşturabileceği ve detaylarını inceleyebileceği modern bir React uygulamasıdır. Bu projede backend için test ve prototipleme amacıyla JSONPlaceholder API'si kullanılmıştır. Global state yönetimi için Redux, kullanıcı oturum işlemleri için Context API, API istekleri için ise merkezi bir servis katmanı (service layer) kullanılmıştır. Responsive tasarım Bootstrap ile sağlanmaktadır.

## Özellikler

- **Kullanıcı Girişi ve Kayıt:**  
  Kullanıcılar, login ve register işlemlerini gerçekleştirebilir. Oturum yönetimi Context API üzerinden yapılır ve giriş yapmamış kullanıcıların blog içeriklerine erişimi PrivateRoute bileşeni ile engellenir.

- **Blog Gönderilerinin Yönetimi:**  
  - **Listeleme:**  
    Redux üzerinden JSONPlaceholder'dan çekilen gönderiler, Pagination bileşeni ile listelenir.
  - **Detay Görüntüleme:**  
    Seçilen gönderinin detayları servis katmanı üzerinden getirilir.
  - **Gönderi Oluşturma:**  
    Kullanıcı, yeni gönderi oluşturabilir; oluşturulan gönderi simülasyon amaçlı JSONPlaceholder API’sine POST isteği ile gönderilir.

- **Responsive Tasarım:**  
  Bootstrap kullanılarak mobil ve masaüstü uyumlu kullanıcı arayüzü sağlanmıştır.

- **Global API İstekleri Yönetimi:**  
  Tüm API istekleri, `src/services/api.js` altında oluşturulan Axios instance'ı ve ilgili servis modülleri (authService.js, postService.js) üzerinden merkezi olarak yönetilir.

## Kullanılan Teknolojiler

- **React** – Modern, component tabanlı kullanıcı arayüzü geliştirme.
- **Redux & Redux Toolkit** – Global state yönetimi (blog gönderileri).
- **Context API** – Kullanıcı oturum yönetimi.
- **React Router** – Uygulama içi yönlendirme ve korunan (private) rotalar.
- **Axios** – Servis katmanı üzerinden API istekleri.
- **Bootstrap** – Responsive ve modern tasarım.
- **JSONPlaceholder** – Test amacıyla kullanılan simülasyon API'si.

## Kurulum ve Çalıştırma

### 1. Repository’yi Klonlayın

```bash
git clone https://github.com/burcineren/blog-heranindapos.git
cd blog-heranindapos
````
### 2. Bağımlılıkları Yükleyin
npm kullanıyorsanız:
```bash
npm install
````
veya Yarn kullanıyorsanız:
```bash
yarn install
````

### 3. Proje Yapılandırması
####	API Ayarları:
Tüm API istekleri, src/services/api.js dosyasında tanımlı baseURL (https://jsonplaceholder.typicode.com) üzerinden gerçekleştirilmektedir. Gerekli ayarlamalar (örneğin, timeout, header interceptor) bu dosyada yapılabilir.

####	Servis Katmanı:
	• src/services/api.js: Axios instance’ı oluşturulur.
	• src/services/authService.js: Kullanıcı giriş ve kayıt işlemleri bu dosyada yönetilir.
	• src/services/postService.js: Gönderi işlemleri (listeleme, detay, oluşturma, vs.) bu dosyada yönetilir.
	• Global State Yönetimi:
	• src/store/: Redux state yönetimi (postSlice.js, store/index.js) burada yer alır.
	• Oturum Yönetimi:
	• src/context/AuthContext.js: Context API kullanılarak oturum durumu yönetilir.
####	Global State Yönetimi:
	• src/store/: Redux state yönetimi (postSlice.js, store/index.js) burada yer alır.

####	Oturum Yönetimi:
	• src/context/AuthContext.js: Context API kullanılarak oturum durumu yönetilir.


### 4.  Projeyi Çalıştırın
npm kullanıyorsanız:
```bash
npm start
````
veya Yarn kullanıyorsanız:
```bash
yarn start
````
Bu komut, uygulamayı geliştirme modunda başlatır ve genellikle http://localhost:3000 adresinde çalışır.

## Proje Yapısı

```bash
blog-heranindapos/
├── public/
│   ├── index.html                # Temel HTML şablonu, meta etiketleri (örn. viewport) vs.
│   └── assets/                   # Görseller, ikonlar vs.
├── src/
│   ├── components/               # Navbar, Pagination, PrivateRoute gibi yeniden kullanılabilir bileşenler
│   ├── context/                  # AuthContext.js: Kullanıcı oturum yönetimi için Context API
│   ├── pages/                    # LoginPage, RegisterPage, PostListPage, PostDetailPage, PostCreatePage
│   ├── services/                 # api.js, authService.js, postService.js: API isteklerinin merkezi yönetimi
│   ├── store/                    # postSlice.js, index.js: Redux global state yönetimi
│   ├── App.js                    # Uygulamanın yönlendirme yapısı (React Router) ve temel bileşen yerleşimi
│   └── index.js                  # Uygulamanın giriş noktası, Redux Provider ve AuthProvider sarmalaması
├── .gitignore
├── package.json
└── README.md                     # Bu dosya
````

### Demo Kullanıcı Bilgileri
Aşağıdaki test hesabı ile uygulamaya giriş yapabilirsiniz:

E-posta: Sincere@april.biz

Şifre: 123

Bu kullanıcı, JSONPlaceholder üzerinde mevcut olan demo veriler ile ilişkilidir ve test amaçlı kullanılabilir.
