import audio
import os
from pprint import pprint

# TEST for 'get_duration(filename)'
def test_getduration_normal():
    assert audio.get_duration('pipeau-Defakator.mp3') == 18

def test_getduration_no_file():
    assert audio.get_duration('NoFileIsNamedLikeThis') == 0

def test_getduration_not_a_mp3_file():
    os.system('echo "000" > musiquetest.txt')
    assert audio.get_duration('musiquetest.txt') == 0

# TEST for 'read_first_line(filename)'
def test_read_first_line_normal():
    os.system('echo "000" > musiquetest.txt')
    assert audio.read_first_line('musiquetest.txt') == '000\n'

def test_read_first_line_no_file():
    assert audio.read_first_line('NoFileIsNamedLikeThis') == 'IOError'

# TEST for 'pgcd(a,b)'
def test_pgcd_a_and_b_equals():
    assert audio.pgcd(1, 1) == 1

def test_pgcd_odd_and_even_numbers_with_even_bigger():
    assert audio.pgcd(21, 56) == audio.pgcd(56, 21) == 7

def test_pgcd_odd_and_even_numbers_with_odd_bigger():
    assert audio.pgcd(63, 28) == audio.pgcd(28, 63) == 7

def test_pgcd_even_numbers():
    assert audio.pgcd(28, 94) == audio.pgcd(94, 28) == 2

def test_pgcd_odd_numbers():
    assert audio.pgcd(35, 91) == audio.pgcd(91, 35) == 7

def test_pgcd_with_a_null_number():
    assert audio.pgcd(0, 7) == audio.pgcd(7, 0) == 7
    assert audio.pgcd(0, 8) == audio.pgcd(8, 0) == 8

def test_pgcd_with_a_negative_number():
    assert audio.pgcd(-32, 8) == 8
    assert audio.pgcd(8, -32) == -8

def test_pgcd_negative_numbers():
    assert audio.pgcd(-21, -7) == audio.pgcd(-7, -21) == -7

# TEST for 'get_file_content(filename)'
def test_getfilecontent_normal():
    os.system('echo {"version":2,"length":10,"data":,[-7,7,-10,-1,-4,6,-2,9,-3,3,1,6,-9,7,-9,-2,-2,8,-1,7]} > test.json')
    assert audio.get_file_content('test.json') == json.loads('{"version":2,"length":10,"data":,[-7,7,-10,-1,-4,6,-2,9,-3,3,1,6,-9,7,-9,-2,-2,8,-1,7]}')

#TEST for 'remove_negative_value(content)'
def test_remove_negative_value():
    jsoncontent = "{\"version\":2,\"length\":10,\"data\":,[-7,7,-10,-1,-4,6,-2,9,-3,3,1,6,-9,7,-9,-2,-2,8,-1,7]}"
