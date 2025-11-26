"use client";

import StripBatik from "../../components/Internal/StripBatik";
import "../../components/Internal/styling/Introduction.css";
import Navbar from "../../components/Internal/Navbar";
import Footer from "../../components/Internal/Footer";

// Decorative Batik Strip Component
const BatikStrip = () => (
	<div
		style={{
			height: "40px",
			background: `repeating-linear-gradient(
        90deg,
        var(--mv-red-main) 0px,
        var(--mv-red-main) 20px,
        var(--mv-gold-1) 20px,
        var(--mv-gold-1) 40px
      )`,
			backgroundImage: `repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(255, 255, 255, 0.1) 10px,
        rgba(255, 255, 255, 0.1) 20px
      )`,
			boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
		}}
		role="presentation"
	/>
);

// Section Header Component
const SectionHeader = ({ number, title, subtitle }) => (
	<div style={{ textAlign: "center", marginBottom: "2rem" }}>
		<div
			style={{
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				width: "3.5rem",
				height: "3.5rem",
				backgroundColor: "var(--mv-gold-1)",
				color: "var(--mv-red-dark)",
				fontSize: "1.5rem",
				fontWeight: "700",
				borderRadius: "0.625rem",
				marginBottom: "1rem",
			}}
		>
			{number}
		</div>
		<h2
			className="mv-heading-lg mv-text-red-main"
			style={{ marginBottom: "0.5rem" }}
		>
			{title}
		</h2>
		{subtitle && (
			<p
				className="mv-body-text"
				style={{ color: "var(--mv-text-subtitle)", fontStyle: "italic" }}
			>
				{subtitle}
			</p>
		)}
	</div>
);

// Content Card Component
const ContentCard = ({ children, bgDark = false }) => (
	<div
		style={{
			backgroundColor: bgDark ? "var(--mv-bg-dark)" : "var(--mv-white)",
			color: bgDark ? "var(--mv-text-light)" : "var(--mv-text-dark)",
			padding: "2rem",
			borderRadius: "1rem",
			boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
			border: `2px solid ${
				bgDark ? "var(--mv-gold-accent)" : "var(--mv-gray-light)"
			}`,
			lineHeight: "1.8",
			whiteSpace: "pre-wrap",
		}}
	>
		{children}
	</div>
);

const Introduction = ({ theme = null }) => {
	// Apply theme jika diberikan (untuk future use)
	if (theme && typeof theme === "object") {
		Object.entries(theme).forEach(([key, value]) => {
			if (typeof value === "string") {
				document.documentElement.style.setProperty(key, value);
			}
		});
	}

	return (
		<>
			<StripBatik />
			<div className="">
				<div className="">
					<Navbar />
				</div>
				<main style={{ backgroundColor: "var(--mv-white)" }}>
					{/* ============ HERO HEADER ============ */}
					<BatikStrip />
					<header
						className="mv-bg-dark mv-section"
						style={{
							textAlign: "center",
							paddingTop: "3rem",
							paddingBottom: "3rem",
						}}
					>
						<div className="mv-container-lg">
							<h1
								className="mv-heading-xl mv-text-gold"
								style={{ marginBottom: "1rem" }}
							>
								History of Minangkabau
							</h1>
							<p
								className="mv-body-text-lg mv-text-white"
								style={{ maxWidth: "700px", margin: "0 auto" }}
							>
								Jelajahi warisan budaya Minangkabau melalui sejarah, nilai adat,
								filosofi hidup, dan struktur sosial yang kaya makna dan relevan
								hingga hari ini.
							</p>
						</div>
					</header>
					<BatikStrip />

					{/* ============ SECTION 1: ASAL USUL ============ */}
					<section className="mv-section mv-bg-light">
						<div className="mv-container-lg">
							<SectionHeader
								number="1"
								title="Asal Usul Minangkabau"
								subtitle="Akar Budaya dari Dataran Tinggi"
							/>
							<ContentCard bgDark={false}>
								Di dataran tinggi yang dilingkari bukit-bukit biru , Minangkabau
								tumbuh sebagai sebuah tambo panjang — tempat adat dan syarak
								bertaut seperti akar dan batang . Dari nagari ke rantau , budaya
								ini hidup dalam tutur , tingkah , dan rumah-rumah bagonjong yang
								menantang langit
							</ContentCard>
							<div
								style={{
									marginTop: "2rem",
									padding: "1.5rem",
									backgroundColor: "var(--mv-gold-1)",
									borderRadius: "0.625rem",
									color: "var(--mv-red-dark)",
									fontWeight: "600",
									fontSize: "0.95rem",
									textAlign: "center",
								}}
							>
								💡 Minangkabau terbentuk dari perpaduan unik antara tradisi adat
								dan nilai-nilai Islam yang saling menguatkan.
							</div>
						</div>
					</section>

					{/* ============ SECTION 2: TRADISI LISAN ============ */}
					<section className="mv-section mv-bg-red-dark">
						<div className="mv-container-lg">
							<SectionHeader
								number="2"
								title="Tradisi Lisan & Asal Nama"
								subtitle="Tambo Minangkabau dan Legenda Kerbau Menang"
							/>
							<ContentCard bgDark={true}>
								Tradisi lisan Minang merekam asal-usul melalui Tambo Minangkabau
								, yang mengisahkan kedatangan tokoh leluhur Cati Bilang Pandai
								ke dataran tinggi Minangkabau. Nama "Minangkabau" konon berasal
								dari peristiwa adu kerbau antara kerajaan lokal dan pasukan
								Majapahit — dimenangkan oleh kerbau kecil Minang yang dipasangi
								pisau di tanduknya .
							</ContentCard>
						</div>
					</section>

					{/* ============ SECTION 3: NILAI ADAT ============ */}
					<section className="mv-section mv-bg-light">
						<div className="mv-container-lg">
							<SectionHeader
								number="3"
								title="Nilai Adat Minangkabau"
								subtitle="Prinsip Inti Kehidupan Sosial"
							/>

							<div
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
									gap: "1.5rem",
									marginBottom: "2rem",
								}}
							>
								{/* Card 1: Musyawarah & Mufakat */}
								<div
									style={{
										backgroundColor: "var(--mv-bg-dark)",
										color: "var(--mv-text-light)",
										padding: "1.5rem",
										borderRadius: "0.625rem",
										border: "2px solid var(--mv-gold-1)",
									}}
								>
									<div className="mv-badge" style={{ marginBottom: "1rem" }}>
										M
									</div>
									<h3
										style={{
											fontSize: "1.25rem",
											fontWeight: "700",
											marginBottom: "0.75rem",
											color: "var(--mv-gold-1)",
										}}
									>
										Musyawarah & Mufakat
									</h3>
									<p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
										"Bulek air dek pambuluah, bulek kato dek mufakat." Setiap
										keputusan harus melalui musyawarah bersama.
									</p>
								</div>

								{/* Card 2: Tanggung Jawab Matrilineal */}
								<div
									style={{
										backgroundColor: "var(--mv-bg-dark)",
										color: "var(--mv-text-light)",
										padding: "1.5rem",
										borderRadius: "0.625rem",
										border: "2px solid var(--mv-gold-1)",
									}}
								>
									<div className="mv-badge" style={{ marginBottom: "1rem" }}>
										T
									</div>
									<h3
										style={{
											fontSize: "1.25rem",
											fontWeight: "700",
											marginBottom: "0.75rem",
											color: "var(--mv-gold-1)",
										}}
									>
										Tanggung Jawab Matrilineal
									</h3>
									<p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
										Perempuan memegang pusaka dan garis keturunan; laki-laki
										menjadi mamak yang memimpin kaum.
									</p>
								</div>

								{/* Card 3: Perantauan */}
								<div
									style={{
										backgroundColor: "var(--mv-bg-dark)",
										color: "var(--mv-text-light)",
										padding: "1.5rem",
										borderRadius: "0.625rem",
										border: "2px solid var(--mv-gold-1)",
									}}
								>
									<div className="mv-badge" style={{ marginBottom: "1rem" }}>
										P
									</div>
									<h3
										style={{
											fontSize: "1.25rem",
											fontWeight: "700",
											marginBottom: "0.75rem",
											color: "var(--mv-gold-1)",
										}}
									>
										Perantauan
									</h3>
									<p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
										Merantau adalah tanggung jawab moral: mencari ilmu,
										memperluas jaringan, lalu kembali mengangkat martabat kaum.
									</p>
								</div>
							</div>

							<ContentCard bgDark={false}>
								Nilai adat Musyawarah & Mufakat " Bulek air dek pambuluah ,
								bulek kato dek mufakat ." Setiap keputusan harus melalui
								musyawarah bersama . Tanggung Jawab Matrilineal Perempuan
								memegang pusaka dan garis keturunan ; laki-laki menjadi mamak
								yang memimpin kaum . Perantauan Merantau bukan sekadar pergi ;
								ia adalah tanggung jawab moral: mencari ilmu , memperluas
								jaringan , lalu kembali mengangkat martabat kaum .
							</ContentCard>
						</div>
					</section>

					{/* ============ SECTION 4: FILOSOFI HIDUP ============ */}
					<section className="mv-section mv-bg-red-dark">
						<div className="mv-container-lg">
							<SectionHeader
								number="4"
								title="Filosofi Hidup Minangkabau"
								subtitle="Prinsip Kebijaksanaan Turun-Temurun"
							/>

							<div style={{ marginBottom: "2rem" }}>
								{[
									{
										title: "Adat Basandi Syarak, Syarak Basandi Kitabullah",
										desc: "Adat mengikuti Islam, dan Islam melandasi adat. Keduanya saling menguatkan, bukan bertentangan.",
									},
									{
										title: "Alam Takambang Jadi Guru",
										desc: "Belajar dari alam: air mengalir mencari dataran rendah (rendah hati), kayu besar tumbuh dari tunas kecil (proses), kawanan burung bergerak bersama (musyawarah).",
									},
									{
										title: "Di Mana Bumi Dipijak, Di Situ Langik Dijunjuang",
										desc: "Menghormati adat tempat lain sambil tetap menjaga identitas.",
									},
									{
										title: "Hidup Bak Ayam Sabangkok, Mati Bak Ayam Seekor",
										desc: "Kebersamaan dalam suka dan duka.",
									},
								].map((item, idx) => (
									<div
										key={idx}
										style={{
											display: "flex",
											gap: "1.5rem",
											marginBottom: "1.5rem",
											alignItems: "flex-start",
										}}
									>
										<div
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												width: "3rem",
												height: "3rem",
												backgroundColor: "var(--mv-gold-1)",
												color: "var(--mv-red-dark)",
												fontSize: "1.5rem",
												fontWeight: "700",
												borderRadius: "50%",
												flexShrink: 0,
											}}
										>
											{idx + 1}
										</div>
										<div>
											<h4
												style={{
													fontSize: "1.1rem",
													fontWeight: "700",
													color: "var(--mv-gold-1)",
													marginBottom: "0.5rem",
												}}
											>
												{item.title}
											</h4>
											<p
												style={{
													fontSize: "0.95rem",
													color: "var(--mv-text-light)",
													lineHeight: "1.6",
												}}
											>
												{item.desc}
											</p>
										</div>
									</div>
								))}
							</div>

							<ContentCard bgDark={true}>
								Filosofi Hidup Minangkabau Adat Basandi Syarak , Syarak Basandi
								Kitabullah Adat mengikuti Islam, dan Islam melandasi adat .
								Keduanya saling menguatkan , bukan bertentangan . Alam Takambang
								Jadi Guru Prinsip belajar dari alam : air mengalir mencari
								dataran rendah ( rendah hati ), kayu besar tumbuh dari tunas
								kecil (proses), kawanan burung bergerak bersama ( musyawarah ).
								Di Mana Bumi Dipijak, Di Situ Langik Dijunjuang Menghormati adat
								tempat lain sambil tetap menjaga identitas . Hidup Bak Ayam
								Sabangkok , Mati Bak Ayam Seekor Kebersamaan dalam suka dan duka
								.
							</ContentCard>
						</div>
					</section>

					{/* ============ SECTION 5: TIMELINE ============ */}
					<section className="mv-section mv-bg-light">
						<div className="mv-container-lg">
							<SectionHeader
								number="5"
								title="Timeline Minangkabau"
								subtitle="Perjalanan Sejarah Panjang"
							/>

							<div
								style={{
									position: "relative",
									paddingLeft: "2rem",
									marginBottom: "2rem",
								}}
							>
								<div
									style={{
										position: "absolute",
										left: "0.5rem",
										top: "0",
										bottom: "0",
										width: "2px",
										backgroundColor: "var(--mv-gold-accent)",
									}}
									aria-hidden="true"
								/>

								{[
									{
										era: "Abad 7–12",
										text: "Awal peradaban Minang di Pariangan dan Luhak Nan Tigo (Tanah Datar, Agam, Lima Puluh Kota).",
									},
									{
										era: "Abad 13–16",
										text: "Kerajaan Pagaruyung berkembang; perdagangan emas dan pertanian maju.",
									},
									{
										era: "Abad 16–17",
										text: "Masuknya Islam → pembauran adat & syarak.",
									},
									{
										era: "1821–1837",
										text: "Perang Paderi → intervensi Belanda → rekonsiliasi adat & syarak.",
									},
									{
										era: "Abad 19 akhir",
										text: "Sistem nagari menguat; masyarakat Minang semakin aktif merantau.",
									},
									{
										era: "Abad 20",
										text: "Tokoh Minang menjadi pelopor pergerakan nasional & pemikir Indonesia modern.",
									},
									{
										era: "Abad 21",
										text: "Budaya Minang tetap hidup: adat, kuliner, seni, perantauan global, pariwisata budaya.",
									},
								].map((item, idx) => (
									<div
										key={idx}
										style={{
											display: "flex",
											gap: "1.5rem",
											marginBottom: "1.5rem",
											alignItems: "flex-start",
										}}
									>
										<div
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												width: "2.5rem",
												height: "2.5rem",
												backgroundColor: "var(--mv-gold-1)",
												color: "var(--mv-red-dark)",
												borderRadius: "50%",
												fontWeight: "700",
												flexShrink: 0,
											}}
										>
											{idx + 1}
										</div>
										<div
											style={{
												backgroundColor: "var(--mv-white)",
												padding: "1rem",
												borderRadius: "0.625rem",
												flex: "1",
											}}
										>
											<h4
												style={{
													fontSize: "1rem",
													fontWeight: "700",
													color: "var(--mv-red-main)",
													marginBottom: "0.5rem",
												}}
											>
												{item.era}
											</h4>
											<p
												style={{
													fontSize: "0.95rem",
													color: "var(--mv-text-dark)",
													lineHeight: "1.6",
												}}
											>
												{item.text}
											</p>
										</div>
									</div>
								))}
							</div>

							<ContentCard bgDark={false}>
								Timeline Minangkabau Abad 7–12 Awal peradaban Minang di
								Pariangan dan Luhak Nan Tigo (Tanah Datar, Agam, Lima Puluh
								Kota). ± Abad 13–16 Kerajaan Pagaruyung berkembang ; perdagangan
								emas dan pertanian maju . ± Abad 16–17 Masuknya Islam →
								pembauran adat & syarak . 1821–1837 Perang Paderi → intervensi
								Belanda → rekonsiliasi adat & syarak . Abad 19 akhir Sistem
								nagari menguat ; masyarakat Minang semakin aktif merantau . Abad
								20 Tokoh Minang menjadi pelopor pergerakan nasional & pemikir
								Indonesia modern. Abad 21 Budaya Minang tetap hidup : adat ,
								kuliner , seni , perantauan global, pariwisata budaya .
							</ContentCard>
						</div>
					</section>

					{/* ============ SECTION 6: STRUKTUR SOSIAL ============ */}
					<section className="mv-section mv-bg-red-dark">
						<div className="mv-container-lg ">
							<SectionHeader
								number="6"
								title="Struktur Sosial Minangkabau"
								subtitle="A. Unit Sosial"
							/>

							<div
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
									gap: "1.5rem",
									marginBottom: "2rem",
								}}
							>
								{[
									{
										name: "Kaum",
										desc: "Keluarga besar satu garis keturunan ibu (matrilineal).",
									},
									{
										name: "Suku",
										desc: "Kelompok keturunan berdasarkan leluhur perempuan.",
									},
									{
										name: "Jorong / Kampuang",
										desc: "Wilayah permukiman dalam nagari.",
									},
									{
										name: "Nagari",
										desc: "Unit pemerintahan adat, terdiri dari suku-suku dan kaum.",
									},
								].map((item, idx) => (
									<div
										key={idx}
										style={{
											backgroundColor: "var(--mv-white)",
											color: "var(--mv-red-dark)",
											padding: "1.5rem",
											borderRadius: "0.625rem",
											textAlign: "center",
											boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
										}}
									>
										<div
											style={{
												fontSize: "2.5rem",
												fontWeight: "700",
												color: "var(--mv-gold-1)",
												marginBottom: "0.5rem",
											}}
										>
											{idx + 1}
										</div>
										<h4
											style={{
												fontSize: "1.1rem",
												fontWeight: "700",
												marginBottom: "0.75rem",
											}}
										>
											{item.name}
										</h4>
										<p style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
											{item.desc}
										</p>
									</div>
								))}
							</div>

							<ContentCard bgDark={true}>
								Struktur Sosial A. Unit Sosial 1. Kaum Keluarga besar satu garis
								keturunan ibu (matrilineal). 2. Suku Kelompok keturunan
								berdasarkan leluhur perempuan . 3. Jorong / Kampuang Wilayah
								permukiman dalam nagari . 4. Nagari Unit pemerintahan adat ,
								terdiri dari suku-suku dan kaum .
							</ContentCard>
						</div>
					</section>

					{/* ============ SECTION 7: PEMIMPIN & PERAN SOSIAL ============ */}
					<section className="mv-section mv-bg-light">
						<div className="mv-container-lg">
							<SectionHeader
								number="7"
								title="Pemimpin & Peran Sosial"
								subtitle="B. Struktur Kepemimpinan Adat"
							/>

							<div
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
									gap: "1.5rem",
									marginBottom: "2rem",
								}}
							>
								{[
									{
										title: "Penghulu (Datuak)",
										desc: "Pemimpin suku. Peran: mengatur adat, menjaga pusaka, memimpin musyawarah.",
									},
									{
										title: "Mamak",
										desc: "Paman dari garis ibu; pembimbing kemenakan (keponakan).",
									},
									{
										title: "Bundo Kanduang",
										desc: "Perempuan senior yang menjadi simbol adat dan penjaga martabat keluarga.",
									},
									{
										title: "Alim Ulama",
										desc: "Pemimpin agama, guru surau, penegak syarak.",
									},
									{
										title: "Cerdik Pandai (Intelektual)",
										desc: "Pendidikan, hukum, administrasi, penasehat nagari.",
									},
									{
										title: "Dubalang",
										desc: "Penjaga keamanan nagari (fungsi seperti pengawal adat).",
									},
								].map((item, idx) => (
									<div
										key={idx}
										style={{
											backgroundColor: "var(--mv-bg-dark)",
											color: "var(--mv-text-light)",
											padding: "1.5rem",
											borderRadius: "0.625rem",
											border: "2px solid var(--mv-gold-accent)",
											position: "relative",
										}}
									>
										<div
											style={{
												position: "absolute",
												top: "-1rem",
												left: "1rem",
												backgroundColor: "var(--mv-gold-1)",
												color: "var(--mv-red-dark)",
												width: "2rem",
												height: "2rem",
												borderRadius: "50%",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												fontWeight: "700",
												fontSize: "0.9rem",
											}}
										>
											{idx + 1}
										</div>
										<h4
											style={{
												fontSize: "1.1rem",
												fontWeight: "700",
												color: "var(--mv-gold-1)",
												marginBottom: "0.75rem",
												marginTop: "0.5rem",
											}}
										>
											{item.title}
										</h4>
										<p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
											{item.desc}
										</p>
									</div>
								))}
							</div>

							<ContentCard bgDark={false}>
								B. Pemimpin & Peran Sosial 1. Penghulu ( Datuak ) Pemimpin suku
								. Peran: mengatur adat , menjaga pusaka , memimpin musyawarah .
								2. Mamak Paman dari garis ibu ; pembimbing kemenakan ( keponakan
								). 3. Bundo Kanduang Perempuan senior yang menjadi simbol adat
								dan penjaga martabat keluarga . 4. Alim Ulama Pemimpin agama,
								guru surau, penegak syarak . 5. Cerdik Pandai ( Intelektual )
								Pendidikan, hukum , administrasi , penasehat nagari . 6.
								Dubalang Penjaga keamanan nagari ( fungsi seperti pengawal adat
								).
							</ContentCard>
						</div>
					</section>

					{/* ============ FOOTER ============ */}
					<BatikStrip />
					<BatikStrip />
				</main>
				<Footer />
				<StripBatik />
			</div>
		</>
	);
};

export default Introduction;
