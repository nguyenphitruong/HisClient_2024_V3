

        class BHYTModel {
            constructor(maKetQua = '',
                ghiChu = '',
                maThe = '',
                hoTen = '',
                ngaySinh = '',
                gioiTinh = '',
                diaChi = '',
                maDKBD = '',
                cqBHXH = '',
                gtTheTu = '',
                gtTheDen = '',
                maKV = '',
                ngayDu5Nam = '',
                maSoBHXH = '',
                maTheCu = '',
                maTheMoi = '',
                gtTheTuMoi ='',
                gtTheDenMoi = '',
                maDKBDMoi ='',
                tenDKBDMoi = '',) 
            {
              this.ghiChu = ghiChu;
              this.maThe = maThe;
              this.hoTen = hoTen;
              this.ngaySinh = ngaySinh;
              this.gioiTinh = gioiTinh;
              this.diaChi = diaChi;
              this.maDKBD = maDKBD;
              this.cqBHXH = cqBHXH;
              this.gtTheTu = gtTheTu;
              this.gtTheDen = gtTheDen;
              this.maKV = maKV;
              this.ngayDu5Nam = ngayDu5Nam;
              this.maSoBHXH = maSoBHXH;
              this.maTheCu = maTheCu;
              this.maTheMoi = maTheMoi;
              this.gtTheTuMoi = gtTheTuMoi;
              this.gtTheDenMoi = gtTheDenMoi;
              this.maDKBDMoi = maDKBDMoi;
              this.tenDKBDMoi = tenDKBDMoi;
            }
          
            setName(name) {
              this.name = name;
            }
          
            setEmail(email) {
              this.email = email;
            }
          }
          export default BHYTModel;