'use strict'
/*
* Verifica la conectividad con direcciones IP privadas assignadas estaticamente
* @autor Adolfo Ascencio Trejo email: adolfo.as.tr.94@gmail.com pachuca202@gmail.com pachux202@live.com.mx
* Tel: 7717468962
* @version 1.0.0 [2 Enero 2020]
*/
const { exec } = require('child_process')
const expect = require('chai').expect

var IPs = {
             'IP 1':'192.168.1.2',
             'IP 2':'192.168.1.3',
             'IP 3':'192.168.1.4',
             'IP 4':'192.168.1.5',
             'IP 5':'192.168.1.6',
             'IP 6':'192.168.1.7',
             'IP 7':'192.168.1.8',
             'IP 8':'192.168.1.9',
             'IP 9':'192.168.1.10',
             'IP 10':'192.168.1.11',
             'IP 11':'192.168.1.12',
             'IP 12':'192.168.1.13',
             'IP 13':'192.168.1.14',
             'IP 14':'192.168.1.15'
             //IP n...
          };

  describe('Verification of the Conectify', () => {
    describe('Ping to IP', () => {
      for(var Ip in IPs)
      {
        it('It must not to be packages lost '+Ip+' '+IPs[Ip], (done) => {
          exec('ping -c 4 '+ IPs[Ip], (error, stdout, stderror) => {
          expect(stdout).to.include('4 packets transmitted')
          expect(stdout).to.include('4 received')
          expect(stdout).to.include('0% packet loss')
          done()
        })
      })
    }
  })
})
