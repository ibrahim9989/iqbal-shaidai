import React from "react";

function Booksmain() {
  return (
    <div>
      <section id="Books">
        <div class="hedding">
          <h3>POETRY BOOKS</h3>
        </div>
        <div class="row container-books">
          <div class="col-sm-6">
            <div class="card books-card">
              <div class="card-body">
                <div class="img-container">
                  <img class="card-img" src="image/law.png" alt="low" />
                </div>
                <h5 class="card-title">AAATISH-E- SAYYAL</h5>

                <p class="card-text">
                  Is mein aath kitabein hain jo Maharaj ki water aur gas scheme,
                  Anjuman Azad ki sthapna, ghalat fehmi ki bimari, machharon ki
                  faryad, jangli janwaron ka safar, aur Mian Khairati ka
                  qabristan ke bare mein hain.
                </p>
                <a href="/Books" class="btn btn-dark">
                  Read
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card books-card">
              <div class="card-body">
                <div class="img-container">
                  <img class="card-img" src="image/quill.png" alt="low" />
                </div>
                <h5 class="card-title">JAGTI AAKHON KE KHAWAB</h5>
                <p class="card-text">
                  Is mein bhaiyon ke masail, gosht aur sabziyon ki kahani,
                  alag-alag pyaar ke tareeke, mazakia family issues, Mirza
                  Khairati Beg ki safar kahani, aur Aalami
                  Anjuman-e-Shoara-e-Ma'zoor ke events hain.
                </p>
                <a href="/Books2" class="btn btn-dark">
                  Read
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row container-books ">
          <div class="col-sm-6 ">
            <div class="card books-card">
              <div class="card-body">
                <div class="img-container">
                  <img class="card-img" src="image/medieval.png" alt="low" />
                </div>
                <h5 class="card-title">JAMA TALAASHI</h5>
                <p class="card-text">
                  Is aath kitabein hain jo chori ke bazaar, ideal khandan,
                  Andhra Pradesh ke politics, ghar ki shikayatein, shairi aur
                  ghass, jhoot bolne wale logon, aur Thackeray ji ke siyasi
                  izhaar par roshni dalti hain.
                </p>
                <a href="/Books3" class="btn btn-dark">
                  Read
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 ">
            <div class="card books-card">
              <div class="card-body">
                <div class="img-container">
                  <img class="card-img" src="image/wave.png" alt="low" />
                </div>
                <h5 class="card-title">BARKATEN VARDI KI</h5>
                <p class="card-text">
                  Is mein aath kitabein hain jo maazi ke jhalak, NDA ke adabi
                  mushaira, musalmanon ke targets, Bharat ki amiri aur gareebi,
                  Qadir Tahir ke Urdu adab, Anwar Hayat ke shayari, aur Masood
                  Javed Hashmi ke shairi par roshni dalti hain.
                </p>
                <a href="/Books4" class="btn btn-dark">
                  Read
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Booksmain;
