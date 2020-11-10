

function viewDetail(r){
				let mainlist = JSON.parse(localStorage.getItem('final'));
				var i = r.parentNode.parentNode.rowIndex;
				let t = i-2;
				let info = (mainlist[t].reference);
				let info2 = (mainlist[t].email);
				let infoo = (mainlist[t].document_first_name);
				let info6 = (mainlist[t].document_middle_name);
				let info7 = (mainlist[t].document_last_name);
				let info12 = (mainlist[t].used_services_in_request);
				let info13 = (mainlist[t].bgc_first_name);
				let info8 = (mainlist[t].document_dob);
				let info10 = (mainlist[t].created_at);
				let info14 = (mainlist[t].country_code);
				let info11 = (mainlist[t].verification_status);
				let info3 = (mainlist[t].country_name);
				let info9 = (mainlist[t].address_first_name);
				let info15 = (mainlist[t].verify_last_state);
				// alert(mainlist[t].address_first_name);
				document.getElementById("myText").value = info;
				document.getElementById("myText2").value = info2;
				document.getElementById("mytexts").value = infoo;
				document.getElementById('id6').value = info6;
				document.getElementById('id7').value = info7;
				document.getElementById('id12').value = info12;
				document.getElementById('id13').value = info13;
				document.getElementById('id8').value = info8;
				document.getElementById('id10').value = info10;
				document.getElementById('id14').value = info14;
				document.getElementById('id11').value = info11;
				document.getElementById("myText3").value = info3;
				document.getElementById('id9').value = info9;
				// document.getElementById("myText4").value = info4;
				document.getElementById("id15").value = info15;
			}