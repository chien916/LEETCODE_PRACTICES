# CMAKE generated file: DO NOT EDIT!
# Generated by "MinGW Makefiles" Generator, CMake Version 3.21

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

SHELL = cmd.exe

# The CMake executable.
CMAKE_COMMAND = "C:\Program Files\JetBrains\CLion\bin\cmake\win\bin\cmake.exe"

# The command to remove a file.
RM = "C:\Program Files\JetBrains\CLion\bin\cmake\win\bin\cmake.exe" -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = D:\Academics\Leetcode\10_regularExpressionMatching

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = D:\Academics\Leetcode\10_regularExpressionMatching\cmake-build-debug

# Include any dependencies generated for this target.
include CMakeFiles/10_regularExpressionMatching.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/10_regularExpressionMatching.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/10_regularExpressionMatching.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/10_regularExpressionMatching.dir/flags.make

CMakeFiles/10_regularExpressionMatching.dir/main.cpp.obj: CMakeFiles/10_regularExpressionMatching.dir/flags.make
CMakeFiles/10_regularExpressionMatching.dir/main.cpp.obj: ../main.cpp
CMakeFiles/10_regularExpressionMatching.dir/main.cpp.obj: CMakeFiles/10_regularExpressionMatching.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=D:\Academics\Leetcode\10_regularExpressionMatching\cmake-build-debug\CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/10_regularExpressionMatching.dir/main.cpp.obj"
	C:\Enviroments\Mingw64\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/10_regularExpressionMatching.dir/main.cpp.obj -MF CMakeFiles\10_regularExpressionMatching.dir\main.cpp.obj.d -o CMakeFiles\10_regularExpressionMatching.dir\main.cpp.obj -c D:\Academics\Leetcode\10_regularExpressionMatching\main.cpp

CMakeFiles/10_regularExpressionMatching.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/10_regularExpressionMatching.dir/main.cpp.i"
	C:\Enviroments\Mingw64\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E D:\Academics\Leetcode\10_regularExpressionMatching\main.cpp > CMakeFiles\10_regularExpressionMatching.dir\main.cpp.i

CMakeFiles/10_regularExpressionMatching.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/10_regularExpressionMatching.dir/main.cpp.s"
	C:\Enviroments\Mingw64\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S D:\Academics\Leetcode\10_regularExpressionMatching\main.cpp -o CMakeFiles\10_regularExpressionMatching.dir\main.cpp.s

# Object files for target 10_regularExpressionMatching
10_regularExpressionMatching_OBJECTS = \
"CMakeFiles/10_regularExpressionMatching.dir/main.cpp.obj"

# External object files for target 10_regularExpressionMatching
10_regularExpressionMatching_EXTERNAL_OBJECTS =

10_regularExpressionMatching.exe: CMakeFiles/10_regularExpressionMatching.dir/main.cpp.obj
10_regularExpressionMatching.exe: CMakeFiles/10_regularExpressionMatching.dir/build.make
10_regularExpressionMatching.exe: CMakeFiles/10_regularExpressionMatching.dir/linklibs.rsp
10_regularExpressionMatching.exe: CMakeFiles/10_regularExpressionMatching.dir/objects1.rsp
10_regularExpressionMatching.exe: CMakeFiles/10_regularExpressionMatching.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=D:\Academics\Leetcode\10_regularExpressionMatching\cmake-build-debug\CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable 10_regularExpressionMatching.exe"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles\10_regularExpressionMatching.dir\link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/10_regularExpressionMatching.dir/build: 10_regularExpressionMatching.exe
.PHONY : CMakeFiles/10_regularExpressionMatching.dir/build

CMakeFiles/10_regularExpressionMatching.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles\10_regularExpressionMatching.dir\cmake_clean.cmake
.PHONY : CMakeFiles/10_regularExpressionMatching.dir/clean

CMakeFiles/10_regularExpressionMatching.dir/depend:
	$(CMAKE_COMMAND) -E cmake_depends "MinGW Makefiles" D:\Academics\Leetcode\10_regularExpressionMatching D:\Academics\Leetcode\10_regularExpressionMatching D:\Academics\Leetcode\10_regularExpressionMatching\cmake-build-debug D:\Academics\Leetcode\10_regularExpressionMatching\cmake-build-debug D:\Academics\Leetcode\10_regularExpressionMatching\cmake-build-debug\CMakeFiles\10_regularExpressionMatching.dir\DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/10_regularExpressionMatching.dir/depend

