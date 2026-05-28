export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5efe3] text-[#2b2b2b]">
      
      {/* HERO */}
      <section className="bg-[#5c3d2e] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-5xl font-black leading-tight">
            วิสัยทัศน์
          </h1>

          <p className="mt-8 max-w-4xl text-2xl leading-relaxed text-orange-100">
            “เป็นศูนย์การเรียนรู้ชุมชนต้นแบบด้านเกษตรนวัตกรรม
            การแปรรูปสินค้า และการท่องเที่ยวเชิงสร้างสรรค์
            ที่สร้างรายได้ พัฒนาคุณภาพชีวิต
            และขับเคลื่อนเศรษฐกิจชุมชนอย่างยั่งยืน”
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-black text-[#5c3d2e]">
          พันธกิจ
        </h2>

        <div className="mt-12 grid gap-6">
          {[
            "ส่งเสริมการเรียนรู้ด้านการเกษตร การแปรรูป และการพัฒนาผลิตภัณฑ์ชุมชนให้ทันสมัยและสร้างมูลค่าเพิ่ม",
            "พัฒนาศูนย์การเรียนรู้ให้เป็นแหล่งศึกษาดูงานและท่องเที่ยวเชิงเกษตรของตำบลนาจอมเทียน",
            "สนับสนุนการสร้างอาชีพ สร้างรายได้ และยกระดับคุณภาพชีวิตของคนในชุมชน",
            "ผลักดันสินค้าและแบรนด์ชุมชนให้เป็นที่รู้จักผ่านการตลาดออนไลน์และนวัตกรรมสร้างสรรค์",
            "ส่งเสริมการอนุรักษ์สิ่งแวดล้อมและใช้ทรัพยากรในชุมชนอย่างคุ้มค่าและยั่งยืน",
            "สร้างเครือข่ายความร่วมมือกับหน่วยงานภาครัฐ เอกชน และสถาบันการศึกษา เพื่อพัฒนาชุมชนอย่างต่อเนื่อง",
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >
              <p className="text-lg leading-8">
                <span className="font-black text-[#5c3d2e]">
                  {index + 1}.
                </span>{" "}
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      
      {/* PRESIDENT */}
<section className="bg-[#e7dccb] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <h2 className="mb-12 text-5xl font-black text-[#5c3d2e]">
      ประวัติประธานวิสาหกิจชุมชน
    </h2>
</div>
    <div className="grid items-center gap-10 lg:grid-cols-2">

      {/* รูป */}
      <div className="w-[250px] h-[250px] overflow-hidden rounded-3xl shadow-2xl">
        <img
          src="/images/aj3.jpg"
          alt="ประธานวิสาหกิจ"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ข้อความ */}
      <div className="rounded-[40px] bg-white p-10 shadow-2xl">
        <h3 className="text-3xl font-black">
          นางวิภา สินสวาสดิ์
        </h3>

        <p className="mt-4 text-xl text-[#5c3d2e]">
          ประธานวิสาหกิจชุมชนบ้านสวยไม้งาม@2465
          ศูนย์การเรียนรู้ชุมชนต้นแบบ ต.นาจอมเทียน
        </p>

            <div className="mt-10 space-y-8 text-lg leading-9">
              
              <div>
                <h4 className="text-2xl font-black text-[#5c3d2e]">
                  ประวัติการศึกษา
                </h4>

                <ul className="mt-4 list-disc space-y-3 pl-6">
                  <li>
                    ปริญญาโท สาขาเทคโนโลยีชีวภาพเกษตร
                    คณะวิทยาศาสตร์และเทคโนโลยี
                    มหาวิทยาลัยราชมงคลตะวันออก
                  </li>

                  <li>
                    ปริญญาตรี สาขาการตลาด
                    คณะบริหารธุรกิจ
                    วิทยาลัยเซาธ์อีสท์บางกอก
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-black text-[#5c3d2e]">
                  ประวัติการทำงานปัจจุบัน
                </h4>

                <p className="mt-4">
                  ธุรกิจส่วนตัวรับเหมาจัดสวน บริการดูแลสวน
                  ลุขกรตัดไม้ แต่งไม้ใหญ่ ขนย้ายไม้ใหญ่
                  งานระบบสวน สมาร์ทฟาร์ม สปริงเกอร์ และงานสนาม
                </p>

                <p className="mt-4">
                  ประธานวิสาหกิจชุมชนบ้านสวยไม้งาม@2465
                  ศูนย์การเรียนรู้ชุมชนต้นแบบ ต.นาจอมเทียน
                  และนักวิจัย
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
