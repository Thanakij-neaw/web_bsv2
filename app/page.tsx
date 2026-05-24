"use client";

export default function CommunityLearningWebsite() {
  const services = [
    {
      title: "ศึกษาดูงาน",
      desc: "เปิดรับหน่วยงาน โรงเรียน มหาวิทยาลัย องค์กรต่างๆ และประชาชนทั่วไป เข้าศึกษาดูงานจริงภายในศูนย์",
      icon: "🏡",
    },
    {
      title: "ฝึกอบรมอาชีพ",
      desc: "Workshop เชิงปฏิบัติการ เรียนรู้จากของจริง ลงมือทำจริง สร้างอาชีพได้จริง",
      icon: "🎓",
    },
    {
      title: "จำหน่ายสินค้า",
      desc: "ผลิตภัณฑ์ชุมชน เกษตรอินทรีย์ สมุนไพร และสินค้าแปรรูปจากภูมิปัญญาท้องถิ่น",
      icon: "🛒",
    },
  ];

  const courses = [
    "การเพาะเห็ดฟางในตะกร้า",
    "การทำน้ำหมักชีวภาพ",
    "การปลูกผักอินทรีย์",
    "การทำยาหม่องสมุนไพร",
    "การแปรรูปผลิตภัณฑ์",
    "ระบบSmart Farm ",
  ];

  const gallery = [
    "/images/activity1.jpg",
    "/images/activity2.jpg",
    "/images/activity3.jpg",
    "/images/activity4.jpg",
  ];

  return (
    <div className="min-h-screen bg-[#f7f3ea] text-gray-800">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/aj2.jpg"
            alt="hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto flex min-h-[750px] max-w-7xl items-center px-6 py-24">
          <div className="max-w-4xl text-white">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold backdrop-blur">
              ศูนย์การเรียนรู้ชุมชนต้นแบบ ต.นาจอมเทียน
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              วิสาหกิจชุมชน
              <br />
              บ้านสวยไม้งาม
              <span className="block text-yellow-300">@2465</span>
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-200">
              แหล่งศึกษาดูงาน ฝึกอบรมอาชีพ เกษตรอินทรีย์
              และศูนย์การเรียนรู้ชุมชนเพื่อการพัฒนาอย่างยั่งยืน
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <a
              href="#booking"
              className="rounded-2xl bg-yellow-400 px-8 py-5 text-lg font-black text-black shadow-2xl transition hover:scale-105">
                จองศึกษาดูงาน
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
              เกี่ยวกับเรา
            </div>

            <h2 className="mt-6 text-5xl font-black leading-tight">
              ศูนย์เรียนรู้ชุมชน
              <br />
              เพื่อสร้างอาชีพอย่างยั่งยืน
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              เราเป็นศูนย์การเรียนรู้และวิสาหกิจชุมชนที่มุ่งเน้นการสร้างอาชีพ
              ถ่ายทอดองค์ความรู้ด้านเกษตรอินทรีย์ การแปรรูปผลิตภัณฑ์
              และการพัฒนาชุมชนแบบพึ่งพาตนเอง
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              เปิดให้หน่วยงาน โรงเรียน มหาวิทยาลัย และประชาชนทั่วไป
              เข้ามาศึกษาดูงาน ฝึกอบรม และร่วมกิจกรรมภายในศูนย์
            </p>


          </div>

          <div className="overflow-hidden rounded-[40px] shadow-2xl">
  <img
    src="/images/aj1.jpg"
    alt="community"
    className="h-full w-full object-cover"
  />
</div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-green-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-5xl font-black">
              สิ่งที่เราให้บริการ
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-100">
              ครบทั้งด้านการเรียนรู้ การฝึกอบรม และการสร้างรายได้จากชุมชน
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-[32px] bg-white/10 p-10 backdrop-blur transition hover:-translate-y-2 hover:bg-white/20"
              >
                <div className="text-6xl">{service.icon}</div>

                <h3 className="mt-8 text-3xl font-black">
                  {service.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-green-100">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-5xl font-black">
            หลักสูตรยอดนิยม
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            เรียนรู้จากของจริง ใช้งานได้จริง สร้างรายได้จริง
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="rounded-[28px] bg-white p-8 shadow-xl transition hover:-translate-y-2"
            >
              <div className="text-5xl font-black text-green-700">
                0{index + 1}
              </div>

              <h3 className="mt-6 text-2xl font-black leading-snug">
                {course}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Workshop เชิงปฏิบัติการ พร้อมวิทยากรจากชุมชน
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#efe7d7] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-5xl font-black">
              บรรยากาศกิจกรรมจริง
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              ภาพจริงจากการศึกษาดูงาน ฝึกอบรม และกิจกรรมภายในศูนย์
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[32px] bg-white shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={image}
                    alt={`gallery-${index}`}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-5xl font-black leading-tight">
              ทำไมต้อง
              <br />
              บ้านสวยไม้งาม @2465
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              เราเชื่อว่าการเรียนรู้ที่ดีที่สุด คือการได้ลงมือทำจริง
              ทุกกิจกรรมของเราจึงออกแบบให้ผู้เข้าร่วมได้สัมผัสประสบการณ์จริง
              สามารถนำกลับไปต่อยอดอาชีพและพัฒนาชุมชนได้จริง
            </p>
          </div>

          <div className="grid gap-5">
            {[
              "มีพื้นที่เรียนรู้จริง",
              "วิทยากรชุมชนตัวจริง",
              "รองรับศึกษาดูงานหมู่คณะ",
              "Workshop ลงมือปฏิบัติจริง",
              "สร้างอาชีพและรายได้จริง",
              "ครบทั้งองค์ความรู้และสินค้า",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                  ✅
                </div>

                <p className="text-lg font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section 
      id="booking"
      className="bg-gradient-to-r from-green-900 to-green-700 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-black leading-tight">
            สนใจศึกษาดูงาน
            <br />
            หรือฝึกอบรม?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-green-100">
            ติดต่อเราได้ทันที พร้อมให้คำแนะนำ ประสานงาน
            และจัดกิจกรรมศึกษาดูงานสำหรับหน่วยงานและคณะต่างๆ
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] bg-white/10 p-8 backdrop-blur">
              <div className="text-5xl">📞</div>

              <h3 className="mt-5 text-2xl font-black">
                โทรศัพท์ & ID Line
              </h3>

              <p className="mt-3 text-lg text-green-100">
                061-445-3561
              </p>
            </div>

            <div className="rounded-[28px] bg-white/10 p-8 backdrop-blur">
              <div className="text-5xl">📍</div>

              <h3 className="mt-5 text-2xl font-black">
                สถานที่ 
              </h3>

              <p className="mt-3 text-lg text-green-100">
                ศูนย์การเรียนรู้ชุมชนต้นแบบ ต.นาจอมเทียน
              </p>
            </div>

            <div className="rounded-[28px] bg-white/10 p-8 backdrop-blur">
              <div className="text-5xl">💬</div>

              <h3 className="mt-5 text-2xl font-black">
                Facebook
              </h3>

              <p className="mt-3 text-lg text-green-100">
                ศูนย์การเรียนรู้ชุมชนต้นแบบ ต.นาจอมเทียน
              </p>
            </div>
          </div>

          <button className="mt-14 rounded-2xl bg-yellow-400 px-12 py-5 text-xl font-black text-black shadow-2xl transition hover:scale-105">
            ติดต่อเราทันที
          </button>
        </div>
      </section>
    </div>
  );
}
